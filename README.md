# Lety Antony Fashion House Website

Professional, responsive website for Lety Antony Fashion House — a premium custom fashion production house in Abuja, Nigeria.

**Live Promise:** Your style, your fabric, 7 working days. Real-time tracking. AI visualization. Guaranteed.

## Features

### Core Value Propositions
- **7-Day Production Guarantee** - Industrialized production pipeline with documented stages
- **AI Visualization Engine** - Clients see their finished outfit before production starts
- **Real-Time Tracking** - WhatsApp & SMS updates at every production stage
- **Partner-Stocked Showroom** - Consignment fabric model reduces inventory costs, increases selection
- **Quality Assurance** - Documented QC checklist for every garment

### Website Sections
1. **Hero Section** - Bold value proposition with CTA
2. **Services Showcase** - 6 core service offerings with icons
3. **Production Pipeline** - Visual 7-stage timeline
4. **AI Visualization** - Feature explainer for design preview technology
5. **Why Choose Us** - 6 unique selling points
6. **Pricing** - 3 complexity tiers (Simple, Standard, Complex)
7. **Target Markets** - 4 customer segments served
8. **Contact Form** - Lead capture with location, phone, email
9. **Navigation** - Responsive header with mobile menu
10. **Footer** - Company info, social links, service links

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment Ready:** Vercel, Netlify, AWS, or any Node.js host

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
cd lety-antony-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
lety-antony-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header (responsive mobile menu)
│   └── Footer.tsx          # Footer with links & contact
├── tailwind.config.js      # Tailwind theme & color system
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies & scripts
```

## Design System

### Color Palette
- **Primary (Forest Green):** `#0f3a2f` - Brand color for buttons, headings
- **Secondary (Teal):** `#14a38f` - Accent for highlights
- **Accent (Green):** `#16a34a` - Call-to-action buttons
- **Neutral:** Gray scale for text and backgrounds

### Typography
- **Headings:** Georgia serif (professional, elegant)
- **Body:** Helvetica Neue sans-serif (clean, readable)

### Components
- **Cards:** White background, subtle border, hover shadow
- **Buttons:** Primary (filled), Secondary (outlined), Accent (green)
- **Sections:** Alternating white and primary-50 backgrounds

## Key Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage with full feature showcase |
| `#services` | Service offerings anchor |
| `#process` | 7-day production pipeline |
| `#why` | Why choose Lety Antony |
| `#contact` | Contact form & location |

## Customization

### Update Business Information
Edit `components/Footer.tsx` and `app/page.tsx`:
- Phone number
- Email address
- Physical address
- Social media links

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { /* your brand colors */ }
  secondary: { /* accent colors */ }
  accent: 'your-cta-color'
}
```

### Modify Content
All text is editable in `app/page.tsx`. Update:
- Headlines
- Service descriptions
- Pricing
- Target market segments
- Contact details

### Add Images
1. Create `public/images/` folder
2. Add image files
3. Reference in `page.tsx`:
```tsx
<img src="/images/filename.jpg" alt="description" />
```

## Performance Optimization

- ✅ Next.js automatic code splitting
- ✅ Responsive images (use `next/image` for optimization)
- ✅ CSS-in-JS (Tailwind) with minimal bundle
- ✅ Mobile-first responsive design
- ✅ No external dependencies for icons (Lucide React)

## SEO

Metadata configured in `app/layout.tsx`:
- Title: "Lety Antony Fashion House | 7-Day Custom Clothing"
- Description: Business value proposition
- Keywords: custom tailoring, fashion, Abuja, tracking, visualization

## Responsive Breakpoints

- **Mobile:** 375px - 640px
- **Tablet:** 768px - 1024px
- **Desktop:** 1280px+

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages / Netlify
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Responsive touch targets (44px minimum)

## Future Enhancements

- [ ] Integration with payment gateway (Paystack/Flutterwave)
- [ ] Online order form with file uploads
- [ ] Client testimonials carousel
- [ ] Before/after AI render gallery
- [ ] Blog section for fashion tips
- [ ] Multi-language support (English/Yoruba)
- [ ] WhatsApp Business API integration
- [ ] Order status dashboard for clients

## License

© 2024 Lety Antony Fashion House. All rights reserved.

## Support

For questions or issues:
- Email: hello@letyantonyfh.com
- Location: Abuja, FCT, Nigeria

---

**Built with precision. Delivered with certainty.**
