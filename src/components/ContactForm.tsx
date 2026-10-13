import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const token = useRef('');

  useEffect(() => {
    if (!SITE_KEY || !widget.current) return;
    const mount = () => {
      if (!window.turnstile || !widget.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: SITE_KEY,
        appearance: 'interaction-only',
        callback: (t: string) => (token.current = t),
        'expired-callback': () => (token.current = ''),
      });
    };
    if (window.turnstile) mount();
    else {
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.onload = mount;
      document.head.appendChild(s);
    }
  }, []);

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, turnstile: token.current }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || 'Something went wrong.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current);
      token.current = '';
    }
  }

  if (status === 'sent') {
    return (
      <div className="hd lift flex flex-col gap-3 bg-paper p-8" role="status">
        <div className="font-hand text-5xl font-bold leading-none">Got it.</div>
        <p className="text-lg">Thanks for reaching out. I read everything and usually reply within a day or two.</p>
        <button type="button" className="btn hd2 self-start" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="hd lift flex flex-col gap-4 bg-paper p-8" onSubmit={submit} noValidate={false}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
          Name
          <input className="field" type="text" name="name" placeholder="Your name" required autoComplete="name" />
        </label>
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
          Email
          <input className="field" type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
        What are you building?
        <select className="field" name="type" defaultValue="A new app">
          <option>A new app</option>
          <option>Help with an existing app</option>
          <option>Consulting</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
        Tell me about it
        <textarea className="field" name="message" rows={4} placeholder="What is it, who is it for, where are you stuck?" required />
      </label>
      <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
        Anything else?
        <textarea className="field" name="extra" rows={2} placeholder="Timeline, links, budget range, favorite hockey team" />
      </label>
      {/* Honeypot: real people never see or fill this. */}
      <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div ref={widget} />
      {status === 'error' && (
        <p className="text-[15px] font-semibold" style={{ color: 'var(--link)' }} role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary hd2 self-start" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send it'}
      </button>
    </form>
  );
}
