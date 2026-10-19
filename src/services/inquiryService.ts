import type { CollegeInquiry, StudentBatchRange, TrainingDuration, TrainingFormat } from '../types';

export interface InquiryFormData {
  collegeName: string;
  coordinatorName: string;
  email: string;
  phone: string;
  designation?: string;
  city?: string;
  state?: string;
  studentCount?: StudentBatchRange;
  trainingFormat?: TrainingFormat;
  targetYearCohort?: string;
  selectedModules?: string[];
  expectedDuration?: TrainingDuration | string;
  preferredDates?: string;
  additionalRequirements?: string;
  // Honeypot field for spam prevention
  faxNumberWebsiteHoneypot?: string;
}

// Google Apps Script Web App URL for Google Sheets integration
export const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4s5JswxsR7O2SAnNmjxnujqCyU6mgqR-ipEiT11U6wN3lDuGDxWzVpi4pOXK7cn5P/exec";

export interface ValidationErrors {
  [key: string]: string;
}

export interface SubmissionResponse {
  success: boolean;
  referenceId?: string;
  message: string;
  inquiry?: CollegeInquiry;
  errors?: ValidationErrors;
}

const STORAGE_KEY = 'campus_training_college_inquiries_v1';
const LAST_SUBMIT_KEY = 'campus_training_last_submit_timestamp';

// Sanitize inputs
export function sanitizeInput(str: string): string {
  if (!str) return '';
  return str
    .trim()
    .replace(/[<>]/g, '') // remove HTML tags
    .slice(0, 1500); // prevent oversized payloads
}

// Indian states list
export const INDIAN_STATES_AND_UTS = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Delhi (NCR)', 'Jammu and Kashmir',
  'Ladakh', 'Puducherry'
];

// Validate form data
export function validateInquiryForm(data: InquiryFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.coordinatorName || data.coordinatorName.trim().length < 2) {
    errors.coordinatorName = 'Please enter your full name.';
  }

  if (!data.collegeName || data.collegeName.trim().length < 3) {
    errors.collegeName = 'Please enter your college name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-()]/g, '');
  const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  return errors;
}

// Generate unique human-readable Reference ID
function generateReferenceId(): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `PILOT-${year}-${randomSuffix}`;
}

// Save inquiry to persistent storage and optional configured webhook
export async function submitCollegeInquiry(data: InquiryFormData): Promise<SubmissionResponse> {
  // 1. Anti-spam honeypot detection
  if (data.faxNumberWebsiteHoneypot && data.faxNumberWebsiteHoneypot.trim() !== '') {
    // Silently reject bot submissions
    return {
      success: true,
      referenceId: generateReferenceId(),
      message: 'Your inquiry has been received. Our team will contact your placement cell shortly.'
    };
  }

  // 2. Validate data
  const errors = validateInquiryForm(data);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please review and correct the errors indicated on the form.',
      errors
    };
  }

  // 3. Spam rate-limit protection: disallow submissions within 10 seconds from same device
  const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
    return {
      success: false,
      message: 'Please wait a moment before submitting another inquiry.'
    };
  }

  // 4. Construct sanitized inquiry record
  const referenceId = generateReferenceId();
  const inquiryRecord: CollegeInquiry = {
    id: referenceId,
    createdAt: new Date().toISOString(),
    collegeName: sanitizeInput(data.collegeName),
    coordinatorName: sanitizeInput(data.coordinatorName),
    designation: sanitizeInput(data.designation || 'Coordinator / Faculty'),
    email: sanitizeInput(data.email).toLowerCase(),
    phone: sanitizeInput(data.phone),
    city: sanitizeInput(data.city || 'Campus'),
    state: sanitizeInput(data.state || 'Karnataka'),
    studentCount: data.studentCount || '100-250 students',
    trainingFormat: data.trainingFormat || 'on-campus',
    selectedModules: data.selectedModules && data.selectedModules.length > 0 ? data.selectedModules : ['dsa-problem-solving'],
    expectedDuration: data.expectedDuration || '1-2 Weeks Intensive Workshop',
    preferredDates: sanitizeInput(data.preferredDates || 'Upcoming Semester'),
    additionalRequirements: sanitizeInput(data.additionalRequirements || ''),
    status: 'new'
  };

  // 5. Store in localStorage
  try {
    const existing = getAllInquiries();
    existing.unshift(inquiryRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
  } catch (err) {
    console.error('Error persisting inquiry to storage:', err);
  }

  // 6. Google Sheets & Webhook transmission
  const sheetsUrl = (import.meta as any).env?.VITE_GOOGLE_SHEETS_URL || GOOGLE_SHEETS_SCRIPT_URL;
  if (sheetsUrl && !sheetsUrl.includes('YOUR_GOOGLE_APPS_SCRIPT_URL')) {
    try {
      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          referenceId,
          date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name: inquiryRecord.coordinatorName,
          collegeName: inquiryRecord.collegeName,
          email: inquiryRecord.email,
          phone: inquiryRecord.phone,
          message: inquiryRecord.additionalRequirements || ''
        })
      });
    } catch (sheetErr) {
      console.warn('Google Sheets sync error (data safely saved locally):', sheetErr);
    }
  }

  // Optional general webhook
  const webhookUrl = (import.meta as any).env?.VITE_INQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryRecord)
      });
    } catch (apiErr) {
      console.warn('Webhook transmission failed, inquiry safely stored locally:', apiErr);
    }
  }

  // Simulate network latency (400ms) for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    success: true,
    referenceId,
    message: `Thank you, ${data.coordinatorName}! Your free pilot training inquiry has been successfully registered under Reference #${referenceId}. Our partnership team will contact your placement cell within 24 business hours.`,
    inquiry: inquiryRecord
  };
}

// Retrieve all stored inquiries
export function getAllInquiries(): CollegeInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Export inquiries to CSV for TPO or internal review
export function exportInquiriesAsCSV(): void {
  const inquiries = getAllInquiries();
  if (inquiries.length === 0) {
    alert('No inquiries found to export.');
    return;
  }

  const headers = [
    'Reference ID',
    'Date Submitted',
    'College Name',
    'Coordinator Name',
    'Designation',
    'Email',
    'Phone',
    'City',
    'State',
    'Student Count',
    'Training Format',
    'Selected Modules',
    'Duration',
    'Preferred Dates',
    'Status',
    'Additional Requirements'
  ];

  const rows = inquiries.map((item) => [
    `"${item.id}"`,
    `"${new Date(item.createdAt).toLocaleDateString()}"`,
    `"${item.collegeName.replace(/"/g, '""')}"`,
    `"${item.coordinatorName.replace(/"/g, '""')}"`,
    `"${item.designation.replace(/"/g, '""')}"`,
    `"${item.email}"`,
    `"${item.phone}"`,
    `"${item.city}"`,
    `"${item.state}"`,
    `"${item.studentCount}"`,
    `"${item.trainingFormat}"`,
    `"${item.selectedModules.join('; ')}"`,
    `"${item.expectedDuration}"`,
    `"${item.preferredDates.replace(/"/g, '""')}"`,
    `"${item.status}"`,
    `"${(item.additionalRequirements || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `college_pilot_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
