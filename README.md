# DAV Networks — Next.js + Tailwind

Next.js 14 (App Router, JavaScript) + Tailwind CSS 3.

## Run
```bash
npm install
cp .env.local.example .env.local   # optional — defaults are built in
npm run dev                        # http://localhost:3000
npm run build && npm start         # production
```

## Where things live
- `lib/site.js` — phone, email, Google Sheet endpoint, plans, FAQs, all copy/data
- `app/page.js` — page sections
- `components/Header.jsx` — sticky header + mobile menu
- `components/Faq.jsx` — accordion
- `components/LeadGate.jsx` — name/phone/email popup shown before any Call or WhatsApp click; posts to every Google Sheet in `SHEET_ENDPOINTS`, remembers the visitor in localStorage
- `tailwind.config.js` — brand colors, fonts, breakpoints (`sheet` 600, `nav` 900, `plans` 1100)

## Images
Replace the striped placeholders in `app/page.js` with `next/image` using files in `/public` (hero, router, lifestyle).

## Deploy
Push to GitHub and import in Vercel. Set `NEXT_PUBLIC_PHONE` and `NEXT_PUBLIC_SHEET_ENDPOINTS` (comma-separated) in the project's environment variables if you want to override the defaults.
