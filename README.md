# FOLA Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS, featuring coaching, speaking, articles, and community sections.

## Features

- **Coaching & Mentorship**: Executive coaching, brand strategy mentorship, and career development services
- **Speaking & Workshops**: Keynote presentations and custom speaking engagements
- **Articles & Newsletter**: Weekly strategy newsletter with exclusive insights
- **Community**: Leadership Circle and Brand Builders Network
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations and consistent spacing
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## LinkedIn Graphics

### LinkedIn Banner
- File: `linkedin-banner.html`
- Dimensions: 1584x396 pixels (LinkedIn standard)
- Usage: Save as PNG/JPG and upload to LinkedIn profile banner

### LinkedIn Featured Section Graphics
- File: `linkedin-featured-graphics.html`
- Four individual graphics for:
  - Executive Coaching
  - Speaking & Workshops
  - Weekly Newsletter
  - Leadership Circle
- Usage: Take screenshots of each graphic card and upload to LinkedIn featured section

### How to Convert HTML to Images

1. Open the HTML files in your browser
2. Use browser developer tools to take full-page screenshots
3. Or use online tools like:
   - htmlcsstoimage.com
   - html-to-image.com
   - Browser extensions like "Full Page Screen Capture"

## Brand Colors & Typography

### Colors
- Primary: #1a1a1a (Dark Gray/Black)
- Secondary: #ffffff (White)
- Accent: #666 (Medium Gray)
- Background: #f8f9fa (Light Gray)

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800

## Customization

### Updating Content
- Edit `src/App.tsx` to modify text content
- Update contact information in the footer
- Modify pricing and service descriptions

### Styling
- Edit `tailwind.config.js` to customize colors, fonts, and design tokens
- All styling uses Tailwind CSS utility classes for consistent design
- Custom colors and fonts are defined in the Tailwind configuration

### Adding New Sections
- Add new navigation items in the nav-links section
- Create corresponding section components
- Update the activeSection state management

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main branch

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
- The built files in the `dist` directory can be deployed to any static hosting service

## License

This project is created for FOLA's portfolio website. All rights reserved.

## Support

For questions or support, contact FOLA at fola@example.com
