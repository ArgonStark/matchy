# How to Add Images Manually

## Step-by-Step Instructions

### 1. Locate the Public Folder
The images need to be placed in: `/Users/argon/Projects/Matchy/matchy-app/public/`

### 2. Required Image Files

You need to add these 2 image files:

#### **logo.png**
- **Description**: Teal background with location pin and network icon
- **Recommended size**: 200x200px or 1024x1024px
- **Format**: PNG
- **Where it's used**: TopBar component, Profile header

#### **get-started.png**
- **Description**: Isometric pixel art scene (Buenos Aires illustration)
- **Recommended size**: 400x400px or larger
- **Format**: PNG
- **Where it's used**: Landing page (/)

### 3. How to Add the Images

**Option A: Using Finder (Mac)**
1. Open Finder
2. Navigate to: `/Users/argon/Projects/Matchy/matchy-app/public/`
3. Drag and drop your image files into this folder
4. Make sure they are named exactly:
   - `logo.png`
   - `get-started.png`

**Option B: Using Terminal**
```bash
cd /Users/argon/Projects/Matchy/matchy-app/public
# Copy your images here
cp /path/to/your/logo.png ./logo.png
cp /path/to/your/get-started.png ./get-started.png
```

**Option C: Using VS Code/Cursor**
1. Open the `public` folder in your editor
2. Right-click in the folder
3. Select "New File" or drag and drop images
4. Name them exactly: `logo.png` and `get-started.png`

### 4. Verify the Images Are Added

After adding, you should see:
```
public/
  ├── logo.png          ← Add this
  ├── get-started.png   ← Add this
  ├── README_IMAGES.md
  └── ...
```

### 5. Restart the Dev Server

After adding images, restart your development server:
```bash
cd /Users/argon/Projects/Matchy/matchy-app
npm run dev
```

### 6. Check if Images Load

- Visit `http://localhost:3000` - you should see the get-started image
- Check any page with TopBar - you should see the logo

## Troubleshooting

### Images still not showing?

1. **Check file names**: Must be exactly `logo.png` and `get-started.png` (case-sensitive)
2. **Check file location**: Must be in `public/` folder, not `public/images/`
3. **Check file format**: Should be PNG files
4. **Clear browser cache**: Hard refresh (Cmd+Shift+R on Mac)
5. **Check browser console**: Look for 404 errors

### Alternative: Use Placeholder Images

If you don't have the images yet, you can temporarily use placeholder services:

- For logo: `https://via.placeholder.com/200/0891B2/FFFFFF?text=Matchy`
- For get-started: `https://via.placeholder.com/400/0891B2/FFFFFF?text=Get+Started`

But you'll need to update the code to use these URLs instead of local paths.

