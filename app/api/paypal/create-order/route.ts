import { NextResponse } from 'next/server';

const PAYPAL_API = process.env.NODE_ENV === 'production' 
  ? 'https://api-m.paypal.com' 
  : 'https://api-m.sandbox.paypal.com';

async function generateAccessToken() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const appSecret = process.env.PAYPAL_APP_SECRET;

  if (!clientId || !appSecret) {
    console.error("CRITICAL: Missing PayPal Environment Variables");
    throw new Error("Missing credentials");
  }

  const auth = Buffer.from(`${clientId}:${appSecret}`).toString('base64');
  
  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: { Authorization: `Basic ${auth}` },
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    console.error("PAYPAL AUTH ERROR:", data);
    throw new Error("Failed to generate Access Token");
  }
  
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { totalDue, selectedStates } = await request.json();
    
    console.log(`Starting order creation for $${totalDue}`);
    
    const accessToken = await generateAccessToken();

    // Re-verify the price
    const BASE_FEE = 1200;
    const STATE_FEE = 50;
    const calculatedTotal = BASE_FEE + (selectedStates.length * STATE_FEE);

    if (calculatedTotal !== totalDue) {
        console.error(`PRICE MISMATCH: Frontend sent ${totalDue}, Backend calculated ${calculatedTotal}`);
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

    // Log the exact response from PayPal if it fails
    if (!orderResponse.ok) {
        console.error("PAYPAL API REJECTED ORDER:", JSON.stringify(orderData, null, 2));
        return NextResponse.json({ error: "PayPal API Error", details: orderData }, { status: 400 });
    }

    console.log("Successfully created order ID:", orderData.id);
    return NextResponse.json({ id: orderData.id });
    
  } catch (error) {
    console.error("FATAL ROUTE ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}