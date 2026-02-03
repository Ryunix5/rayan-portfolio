# Deploy Portfolio to Render

## Quick Deployment Steps

### 1. Sign Up / Log In to Render
- Go to [render.com](https://render.com)
- Sign up or log in (you can use your GitHub account)

### 2. Create a New Static Site
1. Click **"New +"** in the top right
2. Select **"Static Site"**
3. Connect your GitHub account if not already connected
4. Select your repository: **`Ryunix5/rayan-portfolio`**
5. Click **"Connect"**

### 3. Configure Your Site
Fill in the following settings:

- **Name**: `rayan-portfolio` (or whatever you prefer)
- **Branch**: `main`
- **Root Directory**: (leave blank)
- **Build Command**: (leave blank - no build needed for static HTML)
- **Publish Directory**: `.` (current directory)

### 4. Deploy!
1. Click **"Create Static Site"**
2. Render will automatically deploy your site
3. Wait 1-2 minutes for deployment to complete

### 5. Access Your Live Site
Your site will be live at:
```
https://rayan-portfolio.onrender.com
```
(or whatever name you chose)

## Custom Domain (Optional)
If you have a custom domain:
1. Go to your site dashboard on Render
2. Click **"Settings"** → **"Custom Domain"**
3. Add your domain and follow DNS instructions

## Automatic Deployments
✅ Every time you push to GitHub, Render will automatically redeploy!

## Update Your Site
To update your portfolio:
```bash
# Make changes to your files
git add .
git commit -m "Update portfolio"
git push
```
Render will automatically detect the changes and redeploy.

## Alternative: Manual Upload (Static Files)
If you prefer not to use GitHub:
1. On Render, select **"Static Site"**
2. Choose **"Deploy from Git"** → **"Public Git repository"**
3. Or use the Render dashboard to upload files manually

## Benefits of Render
- ✅ Free SSL certificate (HTTPS)
- ✅ Automatic deployments from GitHub
- ✅ Fast CDN
- ✅ Easy custom domain setup
- ✅ Free tier available

## Your Live URLs
- **GitHub Pages**: https://ryunix5.github.io/rayan-portfolio/
- **Render**: https://rayan-portfolio.onrender.com (after deployment)

## Need Help?
If you encounter any issues, check:
- Render documentation: https://render.com/docs/static-sites
- Your GitHub repository is public
- The repository contains your index.html file
