import { NextRequest, NextResponse } from 'next/server';
import { siteUrl } from '@/lib/site';
import { x402PaymentRequired } from '@/lib/agent-discovery/openapi';

export function GET(request: NextRequest) {
  const resourceUrl = `${siteUrl}/api/premium`;
  const paymentSignature = request.headers.get('PAYMENT-SIGNATURE');

  if (paymentSignature) {
    return NextResponse.json(
      {
        status: 'ok',
        message: 'Premium monitoring insights',
        tier: 'premium',
      },
      {
        headers: {
          'PAYMENT-RESPONSE': Buffer.from(
            JSON.stringify({
              success: true,
              transaction: 'demo-settlement',
            }),
          ).toString('base64'),
        },
      },
    );
  }

  const paymentRequired = x402PaymentRequired(resourceUrl);

  return new NextResponse(
    JSON.stringify({ error: 'Payment required', x402: true }),
    {
      status: 402,
      headers: {
        'Content-Type': 'application/json',
        'PAYMENT-REQUIRED': Buffer.from(JSON.stringify(paymentRequired)).toString(
          'base64',
        ),
      },
    },
  );
}
