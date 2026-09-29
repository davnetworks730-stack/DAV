'use client';
import { useEffect, useState } from 'react';
import { navLinks, telHref, waHref, PHONE } from '@/lib/site';

export function Logo({ sub = true, dark = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="rounded-lg bg-orange px-[9px] py-1.5 font-display text-[19px] font-black italic leading-none tracking-[-0.5px] text-white">DAV</span>
      <span className="flex flex-col leading-[1.05]">
        <span className={`font-display text-lg font-extrabold tracking-[-0.3px] ${dark ? 'text-white' : 'text-ink'}`}>Networks</span>
        {sub && <span className="text-[10px] uppercase tracking-[2px] text-muted">Fiber broadband</span>}
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const r = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-site items-center justify-between gap-4 px-5 py-2.5">
        <a href="#top" aria-label="DAV Networks home"><Logo /></a>

        <nav className="hidden gap-7 text-[15px] font-semibold nav:flex">
          {navLinks.map((n) => (
            <a key={n.href} href={n.href} className="text-ink hover:text-orange">{n.label}</a>
          ))}
        </nav>
        <div className="hidden gap-2 nav:flex">
          <a href={telHref} className="btn-outline-navy px-[18px] py-[9px] text-[15px]">Call</a>
          <a href={waHref} target="_blank" rel="noopener" className="btn-wa px-5 py-[11px] text-[15px]"><span className="wa-dot h-2 w-2" />WhatsApp</a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-[46px] w-[46px] flex-col items-center justify-center gap-[5px] rounded-xl border-[1.5px] border-line-strong bg-white nav:hidden"
        >
          <span className="h-0.5 w-5 rounded bg-ink" /><span className="h-0.5 w-5 rounded bg-ink" /><span className="h-0.5 w-5 rounded bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-cream px-5 pb-5 pt-2 nav:hidden">
          {navLinks.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 font-display text-[22px] font-extrabold text-ink">{n.label}</a>
          ))}
          <div className="mt-4 text-sm text-muted">Call or WhatsApp · {PHONE}</div>
        </nav>
      )}
    </header>
  );
}
