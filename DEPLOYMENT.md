# Deployment Guide - Lety Antony Fashion House Website

## Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js. Deployment is seamless and automatic.

### Steps:
1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect Your Repository**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects it's a Next.js project

3. **Configure Environment Variables**
   - Add environment variables from `.env.example`
   - Settings → Environment Variables

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live at `https://your-project.vercel.app`

5. **Custom Domain**
   - Settings → Domains
   - Add your custom domain (letyantonyfh.com)
   - Update DNS records per Vercel's instructions

**Cost:** Free tier includes unlimited deployments. Paid plans for advanced features.

---

## Option 2: Netlify

Simple alternative to Vercel with similar ease of use.

### Steps:
1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Connect Repository**
   - New site from Git → GitHub
   - Select your repository
   - Build settings auto-configured for Next.js

3. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add your `.env` variables

4. **Deploy**
   - Netlify auto-deploys on git push
   - Site available at `https://your-site.netlify.app`

5. **Custom Domain**
   - Domain management → Add custom domain
   - Follow DNS setup instructions

**Cost:** Free tier includes unlimited builds. Paid plans for advanced features.

---

## Option 3: AWS (Amplify or Lightsail)

For more control and scalability.

### AWS Amplify:
1. **Create AWS Account** at [aws.amazon.com](https://aws.amazon.com)
2. **Open AWS Amplify Console**
3. **Connect GitHub Repository**
4. **Set Build Settings:**
   ```
   Build command: npm run build
   Start command: npm start
   ```
5. **Add Environment Variables**
6. **Deploy** → Amplify handles it automatically

**Cost:** ~$0.15/GB transfer + data storage fees (free tier available).

---

## Option 4: Google Cloud (App Engine)

Professional hosting with enterprise features.

### Steps:
1. **Create Google Cloud Account**
2. **Create New Project**
3. **Create `app.yaml`:**
   ```yaml
   runtime: nodejs18
   env: standard
   handlers:
   - url: /.*
     script: auto
   env_variables:
     NEXT_PUBLIC_API_URL: "your-api-url"
   ```

4. **Deploy:**
   ```bash
   gcloud app deploy
   ```

**Cost:** Pay-as-you-go. Usually $10-30/month for small apps.

---

## Option 5: Self-Hosted (VPS)

Full control but requires server management knowledge.

### Prerequisites:
- VPS from Linode, DigitalOcean, or Hetzner (~$5-10/month)
- SSH access
- Basic Linux knowledge

### Steps:

1. **SSH into Server**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/lety-antony-website.git
   cd lety-antony-website
   ```

5. **Install Dependencies & Build**
   ```bash
   npm install
   npm run build
   ```

6. **Start with PM2**
   ```bash
   pm2 start "npm start" --name "lety-antony"
   pm2 startup
   pm2 save
   ```

7. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt-get install -y nginx
   ```
   
   Create `/etc/nginx/sites-available/letyantonyfh`:
   ```nginx
   server {
       listen 80;
       server_name letyantonyfh.com www.letyantonyfh.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable Nginx Config**
   ```bash
   sudo ln -s /etc/nginx/sites-available/letyantonyfh /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Setup SSL (Free with Let's Encrypt)**
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d letyantonyfh.com -d www.letyantonyfh.com
   ```

---

## Domain Setup

### For All Hosting Options:

1. **Buy Domain**
   - Namecheap, GoDaddy, or any registrar
   - Register `letyantonyfh.com` + `www.letyantonyfh.com`

2. **Update DNS Records**
   - Hosting provider provides DNS records to add
   - Go to domain registrar DNS settings
   - Add A records or CNAME records per your host

3. **Wait for Propagation**
   - DNS changes take 24-48 hours to fully propagate
   - Check status at [MXToolbox](https://mxtoolbox.com/dnsrecordtypelookup.aspx)

---

## Performance Optimization After Deployment

### Enable Caching
```javascript
// In next.config.js
headers: async () => [
  {
    source: '/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=3600, must-revalidate',
      },
    ],
  },
]
```

### Image Optimization
- Replace `<img>` with Next.js `<Image>` component
- Automatically serves optimized WebP formats

### Monitor Performance
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- GTmetrix for detailed reports

---

## Post-Deployment Checklist

- [ ] Domain points correctly to site
- [ ] SSL certificate is active (HTTPS)
- [ ] Mobile responsive on all devices
- [ ] Form submissions working
- [ ] All links functional
- [ ] Images loading correctly
- [ ] Page speed < 3 seconds
- [ ] Contact email notifications set up
- [ ] Analytics tracking installed
- [ ] Social media links configured
- [ ] Business hours/contact info updated
- [ ] Backup strategy in place

---

## Troubleshooting

### Build Fails on Vercel/Netlify
```bash
# Clear cache and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Pages Not Updating
- Hard refresh browser (Ctrl+F5)
- Clear browser cache
- Check deployment logs for errors

### Environment Variables Not Working
- Verify `.env.local` exists locally
- Confirm env vars added to platform dashboard
- Redeploy after adding new variables

### Slow Performance
- Enable image optimization
- Minify CSS/JS (automatic in Next.js)
- Enable gzip compression in Nginx
- Use CDN for static assets

---

## Support

For deployment questions:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- AWS Amplify: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)

---

**Recommendation:** Start with **Vercel** for simplicity. Upgrade to self-hosted later if needed.
