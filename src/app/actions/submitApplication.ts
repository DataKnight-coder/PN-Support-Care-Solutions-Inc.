'use server';

import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export async function submitApplication(prevState: any, formData: FormData) {
  if (!(await checkRateLimit())) {
    return { success: false, message: 'Too many requests. Please try again in a few minutes.' };
  }

  // Honeypot
  const honeypot = formData.get('address');
  if (honeypot) {
    return { success: false, message: 'Spam detected. Request denied.' };
  }

  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const position = formData.get('position') as string;
  const coverLetter = formData.get('coverLetter') as string;
  const resume = formData.get('resume') as File;

  // Basic Validation
  if (!fullName || !email || !phone || !position || !resume) {
    return { success: false, message: 'Please fill in all required fields and attach your resume.' };
  }

  // File Validation
  if (resume.size === 0) {
    return { success: false, message: 'Resume file is empty.' };
  }

  if (resume.size > MAX_FILE_SIZE) {
    return { success: false, message: 'Resume file exceeds the 5MB limit.' };
  }

  if (!ALLOWED_MIME_TYPES.includes(resume.type)) {
    return { success: false, message: 'Invalid file type. Please upload a PDF, DOC, or DOCX file.' };
  }

  try {
    // Read file into buffer for attachment
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const toEmail = process.env.CONTACT_EMAIL || 'perpetualnyarko1561@gmail.com';
    const fromEmail = 'onboarding@resend.dev'; // Replace with verified domain in production

    await resend.emails.send({
      from: `PN Support Careers <${fromEmail}>`,
      to: toEmail,
      subject: `New Job Application: ${position} - ${fullName}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Cover Letter / Notes:</strong></p>
        <p>${coverLetter || 'None provided'}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return { 
      success: true, 
      message: 'Thank you for your application! Your resume has been securely submitted. Our hiring team will review your qualifications and contact you if there is a fit.' 
    };

  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false, message: 'There was an error submitting your application. Please try again later.' };
  }
}
