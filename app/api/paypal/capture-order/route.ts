// app/api/paypal/capture-order/route.ts
import { NextResponse } from 'next/server';

const PAYPAL_API = process.env.NODE_ENV === 'production' 
  ? 'https://api-m.paypal.com' 
  : 'https://api-m.sandbox.paypal.com';

async function generateAccessToken() {
  const auth = Buffer.from(`${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_APP_SECRET}`).toString('base64');
  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: { Authorization: `Basic ${auth}` },
  });
  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { orderID } = await request.json();
    const accessToken = await generateAccessToken();

    const captureResponse = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const captureData = await captureResponse.json();
    return NextResponse.json(captureData);
    
  } catch (error) {
    console.error("Failed to capture order:", error);
    return NextResponse.json({ error: "Failed to capture order" }, { status: 500 });
  }
}