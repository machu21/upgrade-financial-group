// app/api/paypal/create-order/route.ts
import { NextResponse } from 'next/server';

const PAYPAL_API = process.env.NODE_ENV === 'production' 
  ? 'https://api-m.paypal.com' 
  : 'https://api-m.sandbox.paypal.com';

// Helper to generate access token
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
    const { totalDue, selectedStates } = await request.json();
    const accessToken = await generateAccessToken();

    // Re-verify the price on the backend for security
    const BASE_FEE = 1200;
    const STATE_FEE = 50;
    const calculatedTotal = BASE_FEE + (selectedStates.length * STATE_FEE);

    if (calculatedTotal !== totalDue) {
        return NextResponse.json({ error: "Price mismatch" }, { status: 400 });
    }

    const orderResponse = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: calculatedTotal.toString(),
            },
            description: `FAR Agents Elite Membership - ${selectedStates.length} States`,
          },
        ],
      }),
    });

    const orderData = await orderResponse.json();
    return NextResponse.json({ id: orderData.id });
    
  } catch (error) {
    console.error("Failed to create order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}