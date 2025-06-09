'use client';
import React from 'react';
import { useCart } from './CartContext';

export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/createCheckoutSession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart.map(p => ({ productId: p.id })) }),
      });
      const { sessionId } = await res.json();
      const stripe = (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.title}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-6">
          <button onClick={onClose} className="px-4 py-2">Close</button>
          {cart.length > 0 && (
            <button onClick={handleCheckout} className="bg-black text-white px-4 py-2 rounded-lg">Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}
