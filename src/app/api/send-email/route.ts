import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { resend } from '@/lib/resend';
import { ConfirmationTemplate } from '@/components/confirmation-template';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body

    const { data, error } = await resend.batch.send([
      {
        from: 'contact@baillo.dev',
        to: ['mamadoubailodiallo952@gmail.com'],
        subject: `📩 Nouveau message de ${name}`,
        react: EmailTemplate({ name, message }),
        replyTo: email,
      },
      {
        from: 'BailloDev <contact@baillo.dev>',
        to: [email],
        subject: `✅ Confirmation de réception - baillo.dev`,
        react: ConfirmationTemplate({name})
      }
    ]);


    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}