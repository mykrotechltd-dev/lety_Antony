# Quick Start Guide - Lety Antony Website

Get your website running in 5 minutes.

## 1️⃣ Clone/Download the Project

```bash
cd /path/to/projects
# If using git:
git clone <repository-url> lety-antony-website
cd lety-antony-website

# OR download and extract the zip folder
cd lety-antony-website
```

## 2️⃣ Install Dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, and all required packages.

## 3️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You'll see the full website!

## 4️⃣ Customize Content

Edit `app/page.tsx` to update:
- Headlines and descriptions
- Pricing tiers
- Service offerings
- Contact information

Edit `components/Footer.tsx` to update:
- Business name
- Contact details
- Social media links

## 5️⃣ Build for Production

```bash
npm run build
npm start
```

Your production-ready site is now running at `http://localhost:3000`.

---

## 📦 What's Included

✅ **Responsive Design** - Works perfectly on mobile, tablet, desktop
✅ **Fast Performance** - Optimized for speed (Next.js auto-optimization)
✅ **Professional Layout** - Elegant, minimalist design matching reference sites
✅ **Fully Functional** - All sections, forms, and navigation working
✅ **SEO Ready** - Metadata, open graph, structured data
✅ **Mobile Menu** - Hamburger menu for smaller screens
✅ **Dark Mode Ready** - Structure supports easy dark mode addition
✅ **TypeScript** - Type-safe React components
✅ **Tailwind CSS** - Utility-first styling (highly customizable)
✅ **Icon Library** - Lucide React icons (24+ used on site)

---

## 🎨 Quick Customizations

### Change Brand Colors
Open `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-brand-color',
    // ...other shades
  }
}
```

### Update Business Info
In `components/Footer.tsx`:
```tsx
<span>+234 (0) 123 456 7890</span>  // Phone
<span>hello@letyantonyfh.com</span>  // Email
```

### Add Your Logo
In `components/Header.tsx`, replace the "LA" initials with:
```tsx
<img src="/logo.png" alt="Lety Antony" className="w-10 h-10" />
```

### Change Pricing
In `app/page.tsx`, find the pricing section and update:
```tsx
price: 'From ₦25,000',  // Update these values
```

---

## 📱 Preview on Mobile

**While running dev server:**
- Find your computer's IP address (e.g., 192.168.x.x)
- On phone, go to `http://192.168.x.x:3000`
- See your site on mobile device

---

## 🚀 Deploy in Minutes

### Option 1: Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Your site is live at `https://your-project.vercel.app`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub
3. Select this repository
4. Click "Deploy"
5. Live at `https://your-site.netlify.app`

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for more hosting options.**

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main homepage content |
| `app/layout.tsx` | Site-wide layout & metadata |
| `components/Header.tsx` | Navigation bar |
| `components/Footer.tsx` | Footer with contact info |
| `tailwind.config.js` | Colors, fonts, theme |
| `app/globals.css` | Global styles & animations |
| `package.json` | Dependencies |

---

## 🛠️ Common Tasks

### Add a New Page
1. Create `app/about/page.tsx`
2. Add your content
3. Access at `http://localhost:3000/about`

### Add an Image
1. Create `public/images/` folder
2. Add your image file
3. Reference in code:
   ```tsx
   <img src="/images/photo.jpg" alt="description" />
   ```

### Update Metadata (SEO)
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description'
}
```

### Change Font
Edit `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['Your Font', 'fallback'],
  sans: ['Your Font', 'fallback']
}
```

---

## 📝 Tips & Best Practices

✅ **Always test on mobile** - Use browser dev tools or real device
✅ **Keep it simple** - Professional design doesn't need complexity
✅ **Optimize images** - Use tools like TinyPNG before uploading
✅ **Use semantic HTML** - Good for accessibility and SEO
✅ **Test all links** - Ensure nothing is broken before deploying
✅ **Backup regularly** - Use Git for version control

---

## ❓ Need Help?

### Common Issues

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**Strange styling?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

**Components not showing?**
- Check browser console for errors (F12)
- Verify all imports are correct
- Ensure Tailwind classes are in content array

---

## 🎯 Next Steps

1. ✅ Run the dev server and explore
2. ✅ Update business info in Footer
3. ✅ Change colors to match your brand
4. ✅ Add your logo
5. ✅ Update pricing and services
6. ✅ Test on mobile
7. ✅ Deploy to Vercel or Netlify
8. ✅ Setup custom domain
9. ✅ Add Google Analytics
10. ✅ Launch!

---

## 📞 Support Resources

- **Next.js Docs:** [nextjs.org](https://nextjs.org)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **React Docs:** [react.dev](https://react.dev)

---

**You're all set! Start customizing and deploying. Your website is production-ready.** 🚀
