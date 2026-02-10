// This is a template for a Next.js 14 API Route (app/api/contact/route.ts)
// In this specific sandbox environment, it acts as a reference for backend logic.

/*
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, bottleneck, budget, token } = await req.json();

    // Verify reCAPTCHA
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 403 });
    }

    // Format Email for Zayyan Ali
    const { data, error } = await resend.emails.send({
      from: 'System <onboarding@resend.dev>',
      to: ['zayyanali002@gmail.com'],
      subject: `NEW_LEAD: ${projectType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #050505; color: #fff;">
          <h1 style="color: #bfff00; font-weight: 900; letter-spacing: -1px;">TRANSMISSION RECEIVED</h1>
          <hr style="border: 0.5px solid #333;" />
          <p><strong>Lead Source:</strong> Portfolio Contact Modal</p>
          <p><strong>Name/Company:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Classification:</strong> ${projectType}</p>
          <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
          <div style="background: #111; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 2px; color: #666;">Bottleneck Analysis</p>
            <p style="line-height: 1.6;">${bottleneck}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
*/
