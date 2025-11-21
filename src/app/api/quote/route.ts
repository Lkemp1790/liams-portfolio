import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, description, features } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Quote Request <noreply@mail.enso-labs.com>',
      to: ['liamkemp1790@gmail.com'],
      subject: `New Quote Request: ${projectType} from ${name}`,
      text: `
        New Project Inquiry
        -------------------
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}

        Project Details
        ---------------
        Type: ${projectType}
        Budget: ${budget}
        Timeline: ${timeline}

        Description:
        ${description}

        Key Features:
        ${features}
      `,
      replyTo: email,
    });

    if (data.error) {
        return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

