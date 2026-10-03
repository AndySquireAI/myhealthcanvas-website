import { useRef, useState } from 'react';

export default function StripeCheckoutButton({ product }: { product: 'current' | 'complete' }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef(false);
  const requestId = useRef('');
  async function checkout() {
    if (pending.current) return;
    pending.current = true;
    setBusy(true); setError('');
    try {
      requestId.current ||= crypto.randomUUID();
      const response = await fetch('/.netlify/functions/mhc-checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product, requestId: requestId.current }), signal: AbortSignal.timeout(20000) });
      const result = await response.json().catch(() => ({ error: 'Checkout is unavailable. Please try again later.' }));
      if (!response.ok) throw new Error(result.error || 'Checkout is unavailable. Please try again.');
      const url = new URL(result.url);
      if (url.protocol !== 'https:' || url.hostname !== 'checkout.stripe.com') throw new Error('Checkout could not be opened.');
      window.location.assign(url.href);
    } catch (error) {
      setError(error instanceof Error && error.name !== 'TimeoutError' ? error.message : 'Checkout took too long. Please try again.');
      pending.current = false; setBusy(false);
    }
  }
  return <div className="w-full space-y-3">
    <button type="button" disabled={busy} onClick={checkout} className="w-full rounded-lg bg-[#007699] px-5 py-3 font-semibold text-white hover:bg-[#005f7b] disabled:opacity-60">
      {busy ? 'Opening secure checkout…' : `Buy ${product === 'current' ? 'Essential — CHF 22' : 'Complete — CHF 31'}`}
    </button>
    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
  </div>;
}
