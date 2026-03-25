---
description: How to deploy the Anvela website to Vercel via Git
---

# Deploying the Anvela Website

To push your local changes to the live site at [kimireceptionist.vercel.app](https://kimireceptionist.vercel.app/):

1. **Stage all changes** (ensure the videos in `public/videos/` are included):
   ```zsh
   git add .
   ```

2. **Commit with a clear message**:
   ```zsh
   git commit -m "feat: [describe your changes here]"
   ```

3. **Push to GitHub**:
   ```zsh
   git push
   ```

// turbo
4. **Trigger Vercel Build**:
   As soon as the push is finished, Vercel will automatically start building the new version. You can track the progress on your Vercel Dashboard.
