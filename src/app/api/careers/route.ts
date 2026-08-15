import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendCareerEmails } from '@/lib/email';

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

    const { name, email, phone, resumeUrl, coverLetter, position } = body as {
      name?: string;
      email?: string;
      phone?: string;
      resumeUrl?: string;
      coverLetter?: string;
      position?: string;
    };

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Full name is required (min 2 characters).' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    // Save career lead to DB
    const lead = await prisma.careerLead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        resumeUrl: resumeUrl || null,
        coverLetter: coverLetter ? coverLetter.trim().substring(0, 5000) : null,
        position: position ? position.trim().substring(0, 200) : null,
        status: 'NEW',
      },
    });

    // Try sending email, but don't fail the request if SMTP is not configured yet
    try {
      await sendCareerEmails(lead);
    } catch (emailError) {
      console.error('Failed to send career emails:', emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Careers API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
