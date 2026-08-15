import nodemailer from 'nodemailer';
import { prisma } from './prisma';

/**
 * Gets the SMTP transporter configured from the database
 */
export async function getTransporter() {
  const config = await prisma.smtpConfig.findFirst();
  
  if (!config) {
    throw new Error("SMTP Configuration not found. Please configure it in the Admin Dashboard.");
  }

  return {
    transporter: nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.password,
      },
    }),
    fromEmail: config.fromEmail,
    notifyEmail: config.notifyEmail || config.fromEmail,
  };
}

/**
 * Base URL for absolute asset URLs in emails.
 * Uses NEXTAUTH_URL in production, falls back to trotsolutions.com.
 */
const SITE_URL = (process.env.NEXTAUTH_URL || 'https://www.trotsolutions.com').replace(/\/$/, '');

/**
 * Branded TROT Solutions email template using the actual logo image.
 */
function getEmailTemplate(title: string, content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          
          <!-- Header with logo -->
          <tr>
            <td style="background-color:#1e293b;padding:28px 40px;text-align:center;border-bottom:4px solid #eab308;">
              <img 
                src="${SITE_URL}/assets/images/resources/trot_black_logo_global.webp"
                alt="TROT Solutions" 
                width="160" 
                style="display:block;margin:0 auto;filter:brightness(0) invert(1);"
              />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;color:#334155;">
              <h2 style="color:#1e293b;margin:0 0 20px;font-size:22px;font-weight:700;border-left:4px solid #eab308;padding-left:14px;">${title}</h2>
              <div style="font-size:15px;line-height:1.7;color:#475569;">
                ${content}
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;"/>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1e293b;padding:20px 40px;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0 0 6px;">
                &copy; ${new Date().getFullYear()} TROT Solutions. All rights reserved.
              </p>
              <p style="color:#64748b;font-size:11px;margin:0;">
                Headquartered in Dubai, UAE &bull; <a href="mailto:info@trotsolutions.com" style="color:#eab308;text-decoration:none;">info@trotsolutions.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Sends a notification email to the admin and a clean auto-reply to the user for Contact Form.
 */
export async function sendContactEmails(lead: {
  id: string;
  name: string;
  companyName?: string | null;
  email: string;
  phone: string;
  userType?: string | null;
  category: string;
  message: string;
}) {
  const { transporter, fromEmail, notifyEmail } = await getTransporter();

  // 1. Admin Notification
  const adminSubject = `New Inquiry [${lead.category}] from ${lead.name}`;
  const adminContent = `
    <p style="margin:0 0 16px;">A new contact inquiry has been submitted via the website.</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;width:130px;font-weight:700;color:#1e293b;">Name</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">${lead.name}</td>
      </tr>
      ${lead.companyName ? `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Company</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">${lead.companyName}</td>
      </tr>` : ''}
      ${lead.userType ? `
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">User Type</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">
          <span style="background-color:${lead.userType === 'Job Seeker' ? '#dbeafe' : '#dcfce7'};color:${lead.userType === 'Job Seeker' ? '#1d4ed8' : '#15803d'};padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;">
            ${lead.userType}
          </span>
        </td>
      </tr>` : ''}
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Email</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${lead.email}" style="color:#2563eb;">${lead.email}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Phone</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">${lead.phone}</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Category</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;">
          <span style="background-color:#fef3c7;color:#92400e;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;">${lead.category}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:700;color:#1e293b;vertical-align:top;">Message</td>
        <td style="padding:10px 14px;color:#475569;white-space:pre-wrap;line-height:1.6;">${lead.message}</td>
      </tr>
    </table>
  `;

  await transporter.sendMail({
    from: `"TROT Solutions" <${fromEmail}>`,
    to: notifyEmail,
    subject: adminSubject,
    html: getEmailTemplate(adminSubject, adminContent),
  });

  // 2. User Auto-Reply (clean — no "regarding" language)
  const userSubject = `We received your message, ${lead.name}`;
  const userContent = `
    <p style="margin:0 0 12px;">Dear <strong>${lead.name}</strong>,</p>
    <p style="margin:0 0 12px;">Thank you for contacting TROT Solutions. We have received your inquiry and our team is reviewing it.</p>
    <p style="margin:0 0 20px;">We typically respond within 1–2 business days. If your matter is urgent, please call us at <a href="tel:+97145647450" style="color:#eab308;text-decoration:none;">+971 456 47450</a>.</p>
    <p style="margin:0;">Best regards,<br/><strong>The TROT Solutions Team</strong></p>
  `;

  await transporter.sendMail({
    from: `"TROT Solutions" <${fromEmail}>`,
    to: lead.email,
    subject: userSubject,
    html: getEmailTemplate(userSubject, userContent),
  });
}

/**
 * Sends a notification email to the admin and a clean auto-reply to the user for Career Form.
 */
export async function sendCareerEmails(lead: {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  resumeUrl?: string | null;
  coverLetter?: string | null;
  position?: string | null;
}) {
  const { transporter, fromEmail, notifyEmail } = await getTransporter();

  // 1. Admin Notification
  const adminSubject = `New Job Application: ${lead.position || 'General'} — ${lead.name}`;
  const adminContent = `
    <p style="margin:0 0 16px;">A new job application has been submitted via the website.</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;width:130px;font-weight:700;color:#1e293b;">Position</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;">
          <span style="background-color:#fef3c7;color:#92400e;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;">${lead.position || 'General Application'}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Name</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">${lead.name}</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Email</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${lead.email}" style="color:#2563eb;">${lead.email}</a></td>
      </tr>
      ${lead.phone ? `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Phone</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#475569;">${lead.phone}</td>
      </tr>` : ''}
      <tr style="background:#f8fafc;">
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#1e293b;">Resume</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;">
          ${lead.resumeUrl ? `<a href="${lead.resumeUrl.startsWith('http') ? lead.resumeUrl : SITE_URL + lead.resumeUrl}" target="_blank" style="background:#eab308;color:#1e293b;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:700;text-decoration:none;">Download CV</a>` : '<span style="color:#94a3b8;">Not provided</span>'}
        </td>
      </tr>
      ${lead.coverLetter ? `
      <tr>
        <td style="padding:10px 14px;font-weight:700;color:#1e293b;vertical-align:top;">Cover Letter</td>
        <td style="padding:10px 14px;color:#475569;white-space:pre-wrap;line-height:1.6;">${lead.coverLetter}</td>
      </tr>` : ''}
    </table>
  `;

  await transporter.sendMail({
    from: `"TROT Careers" <${fromEmail}>`,
    to: notifyEmail,
    subject: adminSubject,
    html: getEmailTemplate(adminSubject, adminContent),
  });

  // 2. User Auto-Reply
  const userSubject = `Application Received — TROT Solutions`;
  const userContent = `
    <p style="margin:0 0 12px;">Dear <strong>${lead.name}</strong>,</p>
    <p style="margin:0 0 12px;">Thank you for your interest in joining TROT Solutions. We have received your application and our hiring team will review your qualifications.</p>
    <p style="margin:0 0 20px;">If your profile matches our requirements, we will be in touch with you to discuss next steps. We appreciate your patience during this process.</p>
    <p style="margin:0;">Best regards,<br/><strong>The TROT Solutions Hiring Team</strong></p>
  `;

  await transporter.sendMail({
    from: `"TROT Careers" <${fromEmail}>`,
    to: lead.email,
    subject: userSubject,
    html: getEmailTemplate(userSubject, userContent),
  });
}
