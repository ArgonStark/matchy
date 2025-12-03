# 📸 Using GitHub URLs for Images

## Can You Use GitHub URLs?

**Short answer:** Yes, but with limitations. ✅

---

## 🔗 How GitHub Raw URLs Work

### Format
```
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/path/to/image.png
```

### Example
If your repo is: `https://github.com/yourusername/matchy-app`

And your image is in: `public/logo.png`

The raw URL would be:
```
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/logo.png
```

---

## ✅ Pros of Using GitHub URLs

1. **Free hosting** - No need for separate image hosting
2. **Version control** - Images are tracked in git
3. **Easy updates** - Just commit new images
4. **Works for development** - Good for testing

---

## ⚠️ Cons & Limitations

### 1. **CORS Issues**
- Some browsers/apps may block cross-origin images
- Farcaster might have security restrictions
- May not work in all contexts

### 2. **Performance**
- GitHub raw URLs can be slower
- No CDN optimization
- No caching headers

### 3. **Reliability**
- If repo is private, URLs won't work
- If you rename repo, URLs break
- GitHub rate limiting (rare but possible)

### 4. **Best Practice**
- Farcaster recommends hosting assets on your domain
- Better for production apps
- More professional

---

## 🎯 Recommended Approach

### Option 1: Use Your Own Domain (Best) ⭐
When you deploy to Vercel, images in `public/` are automatically served:
```
https://your-app.vercel.app/logo.png
```

**Why this is best:**
- ✅ Same domain = no CORS issues
- ✅ Fast CDN
- ✅ Reliable
- ✅ Professional

### Option 2: GitHub Raw URLs (For Development)
Use GitHub URLs temporarily, then switch to your domain after deployment.

### Option 3: Hybrid
- Use GitHub for development/testing
- Switch to your domain for production

---

## 📝 How to Use GitHub URLs

### Step 1: Upload Images to GitHub

1. Add images to your repo in `public/` folder:
   ```
   public/
     ├── logo.png
     ├── icon.png
     ├── get-started.png
     └── preview.png
   ```

2. Commit and push:
   ```bash
   git add public/logo.png public/icon.png
   git commit -m "Add images"
   git push
   ```

### Step 2: Get Raw URLs

For each image, the URL format is:
```
https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/public/FILENAME
```

**Example URLs:**
```
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/logo.png
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/icon.png
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/get-started.png
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/preview.png
```

### Step 3: Update farcaster.json

```json
{
  "miniapp": {
    "iconUrl": "https://raw.githubusercontent.com/yourusername/matchy-app/main/public/icon.png",
    "homeUrl": "https://your-app.vercel.app",
    "splashImageUrl": "https://raw.githubusercontent.com/yourusername/matchy-app/main/public/logo.png"
  }
}
```

**Note:** `homeUrl` should still be your app domain, not GitHub!

---

## 🧪 Testing GitHub URLs

### Quick Test
Open the raw URL in your browser:
```
https://raw.githubusercontent.com/yourusername/matchy-app/main/public/logo.png
```

If you see the image, the URL works! ✅

### Test in Farcaster
1. Update `farcaster.json` with GitHub URLs
2. Deploy your app
3. Test in Farcaster Frame Debugger
4. Check if images load correctly

---

## 🔄 Migration Path

### Development Phase
```json
"iconUrl": "https://raw.githubusercontent.com/yourusername/matchy-app/main/public/icon.png"
```

### Production Phase (After Deployment)
```json
"iconUrl": "https://your-app.vercel.app/icon.png"
```

**Easy migration:** Just replace the GitHub URL with your domain URL!

---

## 💡 Best Practice Recommendation

### For MVP/Development:
✅ **Use GitHub URLs** - Quick and easy, works fine

### For Production:
✅ **Use your domain** - More reliable and professional

### Hybrid Approach:
1. Start with GitHub URLs for development
2. Deploy to Vercel
3. Update `farcaster.json` to use your domain URLs
4. Images in `public/` folder automatically work on your domain

---

## 🚨 Important Notes

1. **Repository must be public** - Private repos won't work with raw URLs
2. **Branch name matters** - Use `main` or `master` (whatever your default branch is)
3. **File path is case-sensitive** - `logo.png` ≠ `Logo.png`
4. **Commit first** - Images must be committed to GitHub before URLs work

---

## 📋 Quick Checklist

- [ ] Images are in `public/` folder in your repo
- [ ] Images are committed and pushed to GitHub
- [ ] Repository is public (or you're okay with limitations)
- [ ] You know your GitHub username and repo name
- [ ] You know your default branch name (usually `main`)
- [ ] You've tested the raw URLs in a browser
- [ ] You've updated `farcaster.json` with GitHub URLs

---

## 🎯 Summary

**Yes, you can use GitHub URLs!** 

But for production, it's better to use your own domain. Start with GitHub for development, then switch to your domain after deployment. The images in your `public/` folder will automatically be available at your domain once deployed.

