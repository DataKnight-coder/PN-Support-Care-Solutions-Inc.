'use server';

import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(prevState: any, formData: FormData) {
  if (!(await checkRateLimit())) {
    return { success: false, message: 'Too many requests. Please try again in a few minutes.' };
  }

  // Honeypot check
  const honeypot = formData.get('address');
  if (honeypot) {
    return { success: false, message: 'Spam detected. Request denied.' };
  }

  const fullName = formData.get('fullName') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const inquiryType = formData.get('inquiryType') as string;
  const message = formData.get('message') as string;

  // Basic Validation
  if (!fullName || !email || !message) {
    return { success: false, message: 'Please fill in all required fields (Name, Email, Message).' };
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL || 'perpetualnyarko1561@gmail.com';
    const fromEmail = 'onboarding@resend.dev'; // Replace with verified domain in production

    await resend.emails.send({
      from: `PN Support Website <${fromEmail}>`,
      to: toEmail,
      subject: `New General Inquiry: ${inquiryType} - ${fullName}`,
      html: `
        <h2>New General Contact Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { 
      success: true, 
      message: 'Thank you for reaching out. Your message has been sent successfully and our team will reply shortly.' 
    };

  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, message: 'There was an error sending your message. Please try again or call us directly.' };
  }
}
