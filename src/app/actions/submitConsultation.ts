'use server';

import { Resend } from 'resend';
import { checkRateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitConsultation(prevState: any, formData: FormData) {
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
  const city = formData.get('city') as string;
  const whoRequiresCare = formData.get('whoRequiresCare') as string;
  const typeOfSupport = formData.get('typeOfSupport') as string;
  const preferredSchedule = formData.get('preferredSchedule') as string;
  const whenNeeded = formData.get('whenNeeded') as string;
  const contactMethod = formData.get('contactMethod') as string;
  const additionalInfo = formData.get('additionalInfo') as string;

  // Basic Validation
  if (!fullName || !phone || !email || !city || !whoRequiresCare || !typeOfSupport) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL || 'perpetualnyarko1561@gmail.com';
    
    // In a real environment with a verified domain, the 'from' address must be from that domain
    // Using a default Resend testing domain or a verified domain if set
    const fromEmail = 'onboarding@resend.dev'; // Replace with a verified domain email in production

    await resend.emails.send({
      from: `PN Support Website <${fromEmail}>`,
      to: toEmail,
      subject: `New Care Consultation Request: ${fullName}`,
      html: `
        <h2>New Care Consultation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Who requires care:</strong> ${whoRequiresCare}</p>
        <p><strong>Type of support:</strong> ${typeOfSupport}</p>
        <p><strong>Preferred Schedule:</strong> ${preferredSchedule || 'Not specified'}</p>
        <p><strong>When is care needed:</strong> ${whenNeeded || 'Not specified'}</p>
        <p><strong>Preferred contact method:</strong> ${contactMethod || 'Not specified'}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${additionalInfo || 'None provided'}</p>
      `,
    });

    return { 
      success: true, 
      message: 'Thank you. Your care consultation request has been received. A member of the PN Support Care Solutions team will contact you shortly.' 
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'There was an error submitting your request. Please try again or call us directly.' };
  }
}
