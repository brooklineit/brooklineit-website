# Brookline IT Website

Custom-built website for Brookline IT. Next.js 14 with App Router, deployed on Vercel.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: GitHub (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — click Deploy
4. In Vercel project settings, add your custom domain: `brooklineit.com`

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Custom Domain Setup

1. In Vercel dashboard → Project → Settings → Domains
2. Add `brooklineit.com`
3. Update your DNS:
   - If using Vercel nameservers: point your domain to Vercel
   - If keeping current DNS: add a CNAME record pointing to `cname.vercel-dns.com`
4. Vercel handles SSL automatically

## Project Structure

```
src/
  app/
    layout.js          # Root layout (nav + footer on every page)
    page.js            # Homepage
    not-found.js       # Custom 404
    sitemap.js         # Auto-generated sitemap
    about/page.js      # About page
    what-we-build/     # Showcase/portfolio page
    contact/page.js    # Contact with form
    managed-it/        # Service: Managed IT
    cloud/             # Service: Microsoft 365 & Cloud
    cybersecurity/     # Service: Cybersecurity
    network/           # Service: Network & Infrastructure
    on-premises/       # Service: On-Site Support
    voice/             # Service: Phone & VoIP
  components/
    Nav.js             # Navigation (client component)
    Footer.js          # Footer
    CTA.js             # Call-to-action section
  styles/
    globals.css        # Design system & global styles
public/
  images/              # Logo files
  favicon.ico
  robots.txt
```

## Contact Form

The contact form on `/contact` currently renders as a static form. To make it functional:

### Option A: Vercel Serverless Function
Create `src/app/api/contact/route.js` to handle form submissions and send emails via a service like Resend, SendGrid, or direct SMTP.

### Option B: Third-party form service
Use a service like Formspree, Basin, or Netlify Forms — just update the form's `action` attribute.

## SEO Notes

- Every page has unique `<title>` and `<meta description>` via Next.js metadata
- Sitemap auto-generated at `/sitemap.xml`
- robots.txt in public directory
- Open Graph tags set in root layout
- Location keywords (Scranton, NEPA, etc.) included in page copy
- Semantic HTML throughout

## Built by Brookline IT
This website was custom-built — not assembled from a template. That's kind of our thing.
