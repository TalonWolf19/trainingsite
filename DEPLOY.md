# Deploying Forge Athletics to Vercel (Free)

Your contact form & newsletter now use **Formspree** — no backend required.
Total cost: **$0/month**.

---

## 1. Create your Formspree forms (5 min)

1. Go to **https://formspree.io** → Sign up with your email
   `singharyamann26@gmail.com`
2. Create form #1 → name it **"Consultation Requests"**
   → copy the form ID (looks like `xyzabcde` from URL `https://formspree.io/f/xyzabcde`)
3. Create form #2 → name it **"Newsletter Subscribers"**
   → copy that form ID too
4. In each form's settings, set the notification email to your Gmail.
   First submission per form will trigger a Formspree verification email — confirm it.

> Free tier: **50 submissions/month per form**. Plenty for a new coaching site.

---

## 2. Deploy on Vercel (5 min)

### Project settings (one-time)
- **Root Directory**: `frontend`
- **Framework Preset**: Create React App
- **Build Command**: `yarn build`
- **Output Directory**: `build`
- **Install Command**: `yarn install`

### Environment variables
In Vercel → **Settings → Environment Variables**, add **only these two**:

| Name | Value |
|---|---|
| `REACT_APP_FORMSPREE_CONSULTATION_ID` | the ID from form #1 (e.g. `xyzabcde`) |
| `REACT_APP_FORMSPREE_NEWSLETTER_ID` | the ID from form #2 |

Apply to: **Production, Preview, Development** (all checked).

> ⚠️ You can now **delete** the `REACT_APP_BACKEND_URL` env var on Vercel — it's no longer used.

### Redeploy
**Deployments** tab → ⋯ menu on latest → **Redeploy** → uncheck "Use existing build cache" → Redeploy.

---

## 3. Test the live site

- Submit a consultation request → check your Gmail.
- Submit your email in the newsletter → check Gmail.

If you see the success toast, you're done. 🎉

---

## What this means
- ✅ Site runs entirely from Vercel's free CDN — instant load, zero cold starts
- ✅ All leads + subscribers land in your Gmail inbox
- ✅ No server to maintain, no database to back up
- ✅ Free forever (under 50 submissions per form per month)

If you ever outgrow 50 leads/month, Formspree's $10/mo plan gives 1,000.
