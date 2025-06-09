import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ error: 'Missing productId' });
  }

  try {
    // Normally, you'd fetch product details from your DB or Shopify here.
    // For demo purposes, we'll hardcode it.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Sample Product',
          },
          unit_amount: 2500, // $25.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (err: any) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
}
