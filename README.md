# MBPM Website

This is a Next.js website prepared for deployment to Vercel.

## 1. Install locally (optional)

```bash
npm install
npm run dev
```

## 2. Deploy to Vercel

- Push this folder to your GitHub repository.
- In Vercel, import the repository.
- Deploy.

## 3. Connect mbpm.info

In Vercel:
- Project -> Settings -> Domains
- Add `mbpm.info`
- Add `www.mbpm.info`

Then add the DNS records Vercel shows you at your domain host.

Important: keep your existing MX and email TXT records in place so `martin@mbpm.info` continues to work.

## 4. Contact form

The quote form is wired for Formspree.

Create a Formspree form, then in Vercel set this environment variable:

`NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here`

Then redeploy.

## 5. Images

All current project photos are inside `/public/images/projects`.
You can replace or add more images there any time.
