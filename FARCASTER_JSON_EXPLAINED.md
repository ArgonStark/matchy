# 📄 Understanding farcaster.json

## What is this file?

`farcaster.json` is the **manifest file** that tells Farcaster how to display and launch your Mini App. It's located at:
```
public/.well-known/farcaster.json
```

This file is automatically served at: `https://your-domain.com/.well-known/farcaster.json`

---

## 🔍 What Each Section Does

### 1. `accountAssociation` (Lines 2-6)
```json
"accountAssociation": {
  "header": "placeholder",
  "payload": "placeholder",
  "signature": "placeholder"
}
```

**What it is:** Proves you own the domain. It's like a signature that says "Yes, I control this website."

**What to do:**
- ✅ **For Development/Testing:** Leave as placeholders (works fine)
- ⚠️ **For Production:** You need to sign this (see "Signing the Manifest" below)

**When to worry:** Only when you're ready to launch publicly on Farcaster.

---

### 2. `miniapp` (Lines 7-15)
This is the main configuration for your Mini App.

#### `version` (Line 8)
```json
"version": "1"
```
- ✅ **Leave as is** - This is the manifest version, not your app version

#### `name` (Line 9)
```json
"name": "Matchy"
```
- ✅ **Already correct** - Your app name

#### `iconUrl` (Line 10) ⚠️ **NEEDS UPDATE**
```json
"iconUrl": "https://your-domain.com/icon.png"
```
- ❌ **Replace `https://your-domain.com`** with your actual domain
- Example: `https://matchy.vercel.app/icon.png`
- This is the icon shown in Farcaster's Mini App list

#### `homeUrl` (Line 11) ⚠️ **NEEDS UPDATE**
```json
"homeUrl": "https://your-domain.com"
```
- ❌ **Replace `https://your-domain.com`** with your actual domain
- Example: `https://matchy.vercel.app`
- This is where your app lives

#### `splashImageUrl` (Line 12) ⚠️ **NEEDS UPDATE**
```json
"splashImageUrl": "https://your-domain.com/logo.png"
```
- ❌ **Replace `https://your-domain.com`** with your actual domain
- Example: `https://matchy.vercel.app/logo.png`
- This is the image shown while your app loads

#### `splashBackgroundColor` (Line 13)
```json
"splashBackgroundColor": "#0891B2"
```
- ✅ **Already correct** - Your teal color

#### `primaryCategory` (Line 14)
```json
"primaryCategory": "social"
```
- ✅ **Already correct** - Your app category

---

## ✅ Step-by-Step: What You Need to Do

### For Local Development (Right Now)
**Nothing!** ✅
- The placeholders work fine for local testing
- Your app will run on `http://localhost:3000`
- You can test everything locally

### For Production (After Deployment)

#### Step 1: Deploy Your App
Deploy to Vercel (or similar):
```bash
npm i -g vercel
cd /Users/argon/Projects/Matchy/matchy-app
vercel
```

You'll get a URL like: `https://matchy-xyz.vercel.app`

#### Step 2: Update All URLs
Replace `https://your-domain.com` with your actual URL in these lines:

**Line 10 - iconUrl:**
```json
"iconUrl": "https://matchy-xyz.vercel.app/icon.png"
```

**Line 11 - homeUrl:**
```json
"homeUrl": "https://matchy-xyz.vercel.app"
```

**Line 12 - splashImageUrl:**
```json
"splashImageUrl": "https://matchy-xyz.vercel.app/logo.png"
```

#### Step 3: Make Sure Images Exist
Ensure these files are in your `public/` folder:
- ✅ `icon.png` (1024x1024px)
- ✅ `logo.png` (200x200px or 1024x1024px)

#### Step 4: Sign the Manifest (Optional for MVP)
For production, you should sign the `accountAssociation` section. But for MVP/testing, placeholders work.

**To sign:**
1. Go to: https://farcaster.xyz/~/settings/developer-tools
2. Use the manifest signing tool
3. Replace the placeholder values with signed ones

---

## 📝 Example: Before vs After

### Before (Current - Placeholders)
```json
{
  "miniapp": {
    "iconUrl": "https://your-domain.com/icon.png",
    "homeUrl": "https://your-domain.com",
    "splashImageUrl": "https://your-domain.com/logo.png"
  }
}
```

### After (Production - Real URLs)
```json
{
  "miniapp": {
    "iconUrl": "https://matchy-xyz.vercel.app/icon.png",
    "homeUrl": "https://matchy-xyz.vercel.app",
    "splashImageUrl": "https://matchy-xyz.vercel.app/logo.png"
  }
}
```

---

## 🎯 Quick Checklist

### Right Now (Development)
- [x] File exists ✅
- [x] Placeholders are fine ✅
- [ ] Add images to `public/` folder (logo.png, icon.png)

### Before Production Launch
- [ ] Deploy app to get real URL
- [ ] Update `iconUrl` with real domain
- [ ] Update `homeUrl` with real domain
- [ ] Update `splashImageUrl` with real domain
- [ ] Verify images are accessible at those URLs
- [ ] (Optional) Sign `accountAssociation` section

---

## 🔗 How to Test

After updating URLs, verify the manifest is accessible:
```
https://your-domain.com/.well-known/farcaster.json
```

You should see your JSON file. If you get 404, check:
1. File is in `public/.well-known/farcaster.json`
2. Deployment includes the `.well-known` folder
3. URLs are correct

---

## 💡 Summary

**TL;DR:**
1. **Now:** Nothing needed, placeholders work for development
2. **After deployment:** Replace `https://your-domain.com` with your real URL in 3 places (lines 10, 11, 12)
3. **Optional:** Sign the manifest for production

The file is already set up correctly for development! You only need to update URLs after you deploy. 🚀

