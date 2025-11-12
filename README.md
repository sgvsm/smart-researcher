# Smart Research Platform - Landing Page

A modern, responsive landing page built with Vite, React, TypeScript, and ShadCN components.

## Tech Stack

- **Vite** - Fast build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **ShadCN UI** - Component library
- **Lucide React** - Icons

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Netlify

This project is ready to deploy to Netlify:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Project Structure

```
research-platform/
├── src/
│   ├── components/
│   │   └── ui/          # ShadCN components (Button, Card, Input, Textarea)
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main landing page component
│   ├── index.css        # Global styles & Tailwind config
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── netlify.toml         # Netlify deployment config
└── package.json
```

## Features

- Fixed navigation with smooth scrolling
- Hero section with stats
- Problems section (6 cards)
- How It Works section (4 steps)
- Benefits section (6 cards)
- Comparison table
- FAQ accordion
- Contact form (visual only - ready for Supabase integration)
- Footer with social links
- Fully responsive design
- Professional blue color scheme

## Future Enhancements

- Connect contact form to Supabase backend
- Add form validation
- Add loading states
- Add success/error messages
- Add routing for multiple pages (when needed)
