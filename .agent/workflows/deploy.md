---
description: how to deploy the Anvela website to Vercel
---

# Deploying to Vercel

The Anvela website is configured for **Automatic Deployment**. Every time you push changes to the `master` branch on GitHub, Vercel will automatically build and deploy the new version.

### Steps to Deploy:

1. **Stage your changes:**
   ```bash
   git add .
   ```

2. **Commit with a clear message:**
   ```bash
   git commit -m "feat: your descriptive message here"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin master
   ```

### Important Notes:
- **Build Logs**: You can monitor the progress on the [Vercel Dashboard](https://vercel.com).
- **Branch**: Ensure you are on the `master` branch before pushing.
- **Caching**: If changes don't appear immediately, try opening the site in an **Incognito Window** or clear your browser cache.
