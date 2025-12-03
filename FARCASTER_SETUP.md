# 🔧 Farcaster Mini App Setup Guide

This guide covers all the Farcaster settings you need to configure for your Matchy Mini App.

---

## 📋 Required Settings Checklist

### ✅ Already Configured
- [x] Farcaster SDK installed (`@farcaster/miniapp-sdk`)
- [x] FarcasterProvider with `sdk.actions.ready()` call
- [x] Basic manifest file structure
- [x] Frame metadata in layout.tsx

### ⚠️ Needs Configuration

#### 1. **Update Domain URLs** (Required for Production)
#### 2. **Add Required Images** (Required)
#### 3. **Sign Manifest** (Required for Production)
#### 4. **Environment Variables** (Recommended)

---

## 🔗 1. Update Domain URLs

### Step 1: Set Your Deployment URL

After deploying your app (e.g., to Vercel), update these files:

#### A. Environment Variable
Create `.env.local` file:
```bash
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

Or set in Vercel dashboard:
- Settings → Environment Variables
- Add: `NEXT_PUBLIC_APP_URL` = `https://your-app.vercel.app`

#### B. Update `farcaster.json`
File: `public/.well-known/farcaster.json`

```json
{
  "accountAssociation": {
    "header": "placeholder",
    "payload": "placeholder",
    "signature": "placeholder"
  },
  "miniapp": {
    "version": "1",
    "name": "Matchy",
    "iconUrl": "https://your-app.vercel.app/icon.png",
    "homeUrl": "https://your-app.vercel.app",
    "splashImageUrl": "https://your-app.vercel.app/logo.png",
    "splashBackgroundColor": "#0891B2",
    "primaryCategory": "social"
  }
}
```

**Replace `https://your-app.vercel.app` with your actual domain!**

#### C. Update `layout.tsx` (Already uses env variable)
The `app/layout.tsx` already uses `NEXT_PUBLIC_APP_URL`, so it will update automatically once you set the environment variable.

---

## 🖼️ 2. Add Required Images

Add these images to the `public/` folder:

### Required Images:
1. **`logo.png`** (200x200px or 1024x1024px)
   - Used in: TopBar, Profile header, Splash screen
   - Format: PNG with transparency or solid teal background

2. **`get-started.png`** (400x400px or larger)
   - Used in: Landing page
   - Format: PNG

3. **`preview.png`** (1200x630px - 3:2 ratio)
   - Used in: Farcaster frame preview
   - Format: PNG

4. **`icon.png`** (1024x1024px)
   - Used in: Farcaster Mini App icon
   - Format: PNG

See `public/HOW_TO_ADD_IMAGES.md` for detailed instructions.

---

## 🔐 3. Sign the Manifest (Production Only)

For **development/testing**, placeholders work fine. For **production**, you need to sign the manifest.

### Option A: Use Farcaster Developer Tools
1. Go to: https://farcaster.xyz/~/settings/developer-tools
2. Use the manifest signing tool
3. Replace placeholders in `farcaster.json` with signed values

### Option B: Sign Programmatically
```typescript
// Example signing (you'll need your Farcaster account key)
import { signAccountAssociation } from '@farcaster/core';

const signed = signAccountAssociation({
  account: 'your-domain.com',
  // ... other params
});
```

**For MVP/Development**: You can skip signing and use placeholders. The app will work in developer mode.

---

## 🌍 4. Environment Variables

### Development (`.env.local`)
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production (Vercel/Deployment)
```bash
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

---

## ✅ 5. Testing Checklist

### Local Development
- [ ] App runs on `http://localhost:3000`
- [ ] No console errors
- [ ] Images load (or fallbacks show)
- [ ] FarcasterProvider initializes

### Farcaster Mini App Testing
- [ ] Deploy to production URL
- [ ] Update all URLs in `farcaster.json`
- [ ] Test in Farcaster Frame Debugger: https://warpcast.com/~/developers/mini-apps/debug
- [ ] Verify `sdk.actions.ready()` is called (no infinite loading)
- [ ] Test user context (fid, username, displayName, pfpUrl)

---

## 🚀 Quick Setup Commands

### 1. Create Environment File
```bash
cd /Users/argon/Projects/Matchy/matchy-app
echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
```

### 2. Update Manifest URLs (after deployment)
```bash
# Replace all instances of "your-domain.com" with your actual domain
# In: public/.well-known/farcaster.json
```

### 3. Deploy to Vercel
```bash
npm i -g vercel
vercel
# Follow prompts, then set NEXT_PUBLIC_APP_URL in Vercel dashboard
```

---

## 📚 Resources

- **Farcaster Mini Apps Docs**: https://miniapps.farcaster.xyz/
- **Getting Started**: https://miniapps.farcaster.xyz/docs/getting-started
- **Manifest Spec**: https://miniapps.farcaster.xyz/docs/specification
- **Developer Tools**: https://farcaster.xyz/~/settings/developer-tools
- **Frame Debugger**: https://warpcast.com/~/developers/mini-apps/debug

---

## 🐛 Troubleshooting

### Issue: Infinite Loading Screen
**Solution**: Make sure `sdk.actions.ready()` is called in FarcasterProvider ✅ (Already done)

### Issue: Images Not Loading
**Solution**: 
1. Check images are in `public/` folder
2. Verify file names match exactly (case-sensitive)
3. Check browser console for 404 errors

### Issue: Manifest Not Found
**Solution**: 
1. Verify `public/.well-known/farcaster.json` exists
2. Check it's accessible at: `https://your-domain.com/.well-known/farcaster.json`
3. Ensure proper deployment (Vercel serves `.well-known` automatically)

### Issue: User Context Not Available
**Solution**: 
- App works in standalone mode (shows mock user)
- For real Farcaster context, test in Farcaster Mini App environment
- Check browser console for SDK errors

---

## 📝 Summary

**For Development:**
1. ✅ Set `NEXT_PUBLIC_APP_URL` in `.env.local`
2. ✅ Add images to `public/` folder
3. ✅ Test locally

**For Production:**
1. ✅ Deploy to Vercel (or similar)
2. ✅ Set `NEXT_PUBLIC_APP_URL` in deployment environment
3. ✅ Update all URLs in `farcaster.json`
4. ✅ Sign manifest (optional for MVP)
5. ✅ Test in Farcaster Frame Debugger

---

*Last Updated: December 2024*

