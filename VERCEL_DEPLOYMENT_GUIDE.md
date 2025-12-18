# Vercel Deployment Guide for Personal Portfolio

## Current Issue
Getting 404 errors because Vercel can't find the built files in the correct location.

## Solution: Configure Vercel Project Settings

### Step 1: Go to Vercel Project Settings
1. Visit your Vercel dashboard: https://vercel.com/dashboard
2. Select your project "uthalam" (or whatever it's named)
3. Go to **Settings** → **General**

### Step 2: Configure Build & Development Settings

Set the following values:

#### Framework Preset
- **Framework Preset**: `Other` (or leave as detected)

#### Root Directory
- **Root Directory**: `frontend`
  - ✅ Click "Include source files outside of the Root Directory in the Build Step"

#### Build & Output Settings

- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist/frontend/browser`
- **Install Command**: `npm install`

### Step 3: Environment Variables (if needed)
If your app uses environment variables, add them in:
- **Settings** → **Environment Variables**

### Step 4: Redeploy
After saving the settings:
1. Go to **Deployments** tab
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**

---

## Alternative: Using vercel.json (Current Approach)

If you prefer to use `vercel.json` instead of project settings, the current configuration should work, but you need to ensure the paths are correct.

### Current vercel.json Configuration:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/frontend/browser"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### How it works:
1. **src**: Points to `frontend/package.json` - tells Vercel where to find the project
2. **distDir**: `dist/frontend/browser` - relative to the `frontend` directory
3. **routes**: Handles SPA routing by redirecting all routes to `index.html`

---

## Troubleshooting

### If you still get 404 errors:

1. **Check Deployment Logs**:
   - Go to your deployment in Vercel
   - Click on "Building" or "Deployment" to see logs
   - Look for the output directory path

2. **Verify Build Output**:
   - The logs should show: `Output location: dist/frontend/browser`
   - Make sure `index.html` exists in this directory

3. **Check Routes**:
   - Ensure the routes configuration redirects to `/index.html`
   - Angular needs this for client-side routing

4. **Try Manual Deployment**:
   ```bash
   cd /var/www/html/Personal-portolio
   vercel --prod
   ```

---

## Recommended Approach

**Use Vercel Project Settings (Step 1-4 above)** because:
- ✅ Cleaner for monorepo structures
- ✅ Easier to maintain
- ✅ More explicit configuration
- ✅ Better debugging through UI

The `vercel.json` approach works but can be tricky with monorepos.
