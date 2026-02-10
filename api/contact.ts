import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, projectType, bottleneck, budget, token } = req.body;

    // 1. Verify reCAPTCHA
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );
    const recaptchaData = await recaptchaRes.json();

    // Check for bot (score threshold 0.5)
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(403).json({ error: 'Bot detected' });
    }

    // 2. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
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
      return res.status(400).json({ error });
    }

    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
