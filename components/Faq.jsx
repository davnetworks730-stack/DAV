'use client';
import { useState } from 'react';
import { faqs } from '@/lib/site';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="flex flex-col">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q} className="border-b border-line-strong">
            <button
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full justify-between gap-4 border-0 bg-transparent py-[22px] text-left text-[17px] font-bold text-ink"
            >
              <span>{f.q}</span>
              <span className="text-[22px] leading-none text-orange">{open ? '×' : '+'}</span>
            </button>
            {open && <p className="mb-[22px] max-w-[560px] text-[15px] leading-[1.65] text-body">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
