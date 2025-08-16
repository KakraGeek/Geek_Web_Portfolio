# The Geek Toolbox Portfolio

A **mobile-first** Next.js portfolio showcasing custom digital tools and web development services. Built with modern technologies and optimized for performance, accessibility, and SEO.

## 🚀 Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Interactive Components**: Animated CTAs, accordion sections, work sample modals
- **Contact Form**: Secure API endpoint with validation and rate limiting
- **SEO Optimized**: Metadata, sitemap, robots.txt, and Open Graph tags
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Lighthouse scores ≥95 on mobile
- **Testing**: Comprehensive Playwright smoke tests

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **Email**: Nodemailer
- **Testing**: Playwright
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/           # Main site pages
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   └── contact/      # Contact page
│   ├── api/              # API routes
│   │   └── contact/      # Contact form API
│   ├── layout.tsx        # Root layout
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots
├── components/            # Reusable components
│   ├── SiteHeader.tsx    # Navigation header
│   ├── SiteFooter.tsx    # Site footer
│   ├── AnimatedCTA.tsx   # Animated call-to-action
│   ├── AccordionBlock.tsx # Accordion component
│   ├── WorkCard.tsx      # Project card
│   ├── WorkModal.tsx     # Project modal
│   └── ContactForm.tsx   # Contact form
├── data/                 # Static data
│   └── projects.ts       # Work samples data
├── lib/                  # Utilities
│   ├── utils.ts          # Common utilities
│   ├── validations.ts    # Zod schemas
│   └── rate-limit.ts     # Rate limiting
└── styles/               # Global styles
    └── globals.css       # Tailwind + custom CSS
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run Playwright Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in specific browser
npx playwright test --project=chromium
```

### Test Coverage

The test suite covers:
- ✅ Page loading and navigation
- ✅ Component functionality (accordion, modals)
- ✅ Contact form validation and submission
- ✅ Mobile responsiveness
- ✅ Accessibility features
- ✅ External link behavior

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Import your GitHub repository
   - Set environment variables
   - Deploy automatically

3. **Environment Variables in Vercel**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
   ```

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Email Setup

For Gmail:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASS`

For other providers, update the nodemailer configuration in `src/app/api/contact/route.ts`.

### Customization

#### Brand Colors
Update the color palette in `tailwind.config.js`:
```js
colors: {
  noir: "#0A0A0A",           // Background
  "electric-blue": "#00D4FF", // Primary accent
  "vivid-lime": "#39FF14",    // Secondary accent
  "sun-amber": "#FFB800",     // Tertiary accent
  "soft-rose": "#FF6B9D",     // Quaternary accent
}
```

#### Content
- **Projects**: Edit `src/data/projects.ts`
- **About**: Modify content in `src/app/(site)/about/page.tsx`
- **Contact**: Update information in `src/app/(site)/contact/page.tsx`

## 📱 Mobile-First Features

- Responsive grid layouts (1→2→3 columns)
- Touch-friendly interactions
- Optimized typography for mobile
- Reduced motion support
- Mobile navigation menu

## ♿ Accessibility Features

- WCAG AA color contrast compliance
- Keyboard navigation support
- Screen reader friendly markup
- Focus management
- ARIA labels and descriptions
- Semantic HTML structure

## 🔒 Security Features

- Input validation with Zod
- Rate limiting (5 requests per 10 minutes per IP)
- Honeypot anti-spam protection
- Time-trap submission prevention
- Security headers
- CORS protection

## 📊 Performance Optimization

- Image optimization
- Font loading optimization
- Code splitting
- Lazy loading
- Reduced motion support
- Optimized bundle sizes

## 🚀 Future Enhancements

- [ ] Blog section
- [ ] Project filtering and search
- [ ] Dark/light theme toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] CMS integration
- [ ] Portfolio case studies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support:
- **Email**: desmond.asiedu@gmail.com
- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ by The Geek Toolbox**
