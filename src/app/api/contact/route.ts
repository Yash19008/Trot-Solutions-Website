import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendContactEmails } from '@/lib/email';

const ALLOWED_CATEGORIES = [
  'Container Cranes',
  'Bulk Cranes',
  'Spreaders',
  'Trailers & Port Carts',
  'Others',
] as const;

const ALLOWED_USER_TYPES = ['Customer', 'Job Seeker'] as const;

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function POST(req: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { name, companyName, email, phone, userType, category, message } = body as {
      name?: string;
      companyName?: string | null;
      email?: string;
      phone?: string;
      userType?: string;
      category?: string;
      message?: string;
    };

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Full name is required (min 2 characters).' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return NextResponse.json({ error: 'A valid phone number is required.' }, { status: 400 });
    }
    if (!category || typeof category !== 'string' || !ALLOWED_CATEGORIES.includes(category.trim() as typeof ALLOWED_CATEGORIES[number])) {
      return NextResponse.json({ error: 'Please select a valid category.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 });
    }
    // userType is optional — only validate if provided
    const sanitizedUserType =
      userType && ALLOWED_USER_TYPES.includes(userType as typeof ALLOWED_USER_TYPES[number])
        ? (userType as string)
        : null;

    // Save lead to DB
    const lead = await prisma.inquiryLead.create({
      data: {
        name: name.trim(),
        companyName: companyName ? companyName.trim().substring(0, 200) : null,
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        userType: sanitizedUserType,
        category: category.trim(),
        message: message.trim().substring(0, 5000),
        status: 'NEW',
      },
    });

    // Try sending email, but don't fail the request if SMTP is not configured yet
    try {
      await sendContactEmails(lead);
    } catch (emailError) {
      console.error('Failed to send contact emails:', emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
