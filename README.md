# DTO Partners - Main Website

[![DeepScan grade](https://deepscan.io/api/teams/27171/projects/29731/branches/951272/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=27171&pid=29731&bid=951272)

> Modern, responsive website for DTO Partners - a strategic advisory firm specializing in business transformation and international expansion.

## 🚀 Overview

This repository contains the main website for DTO Partners, featuring:

- **Modern React 19 frontend** with TypeScript
- **Responsive design** with Tailwind CSS 4.x
- **Interactive Google Maps integration** with enhanced location features
- **Multi-language support** (English/Polish) via i18next
- **Smooth animations** with Framer Motion
- **Professional UI components** with Radix UI
- **GDPR compliance** features

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.x** - Utility-first CSS framework

### Key Libraries
- **@vis.gl/react-google-maps** - Interactive Google Maps integration
- **Framer Motion** - Smooth animations and transitions
- **i18next** - Internationalization framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React** - React support for Vite

## 📦 Project Structure

```
MainWebSite/
├── frontend/                    # Main React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Base UI components (Button, Input, etc.)
│   │   │   ├── NavBar.tsx     # Navigation component
│   │   │   ├── WorldMap.tsx   # Interactive world map
│   │   │   └── GDPRModal.tsx  # GDPR compliance modal
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero section with animations
│   │   │   ├── About.tsx      # About company section
│   │   │   ├── Industries.tsx # Industries we serve
│   │   │   ├── Markets.tsx    # Market presence
│   │   │   ├── Values.tsx     # Company values
│   │   │   ├── Apply.tsx      # Application/contact form
│   │   │   └── Footer.tsx     # Enhanced footer with Google Maps
│   │   ├── lib/               # Utility libraries
│   │   ├── locals/            # Translation files
│   │   ├── theme/             # CSS theme files
│   │   └── types/             # TypeScript type definitions
│   ├── public/                # Static assets
│   │   ├── flags/            # Country flag images
│   │   └── europe.svg        # Europe map SVG
│   ├── scripts/              # Utility scripts
│   └── design/               # Design system documentation
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Google Maps API Key** (for map features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MainWebSite
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Add your Google Maps API key:
   ```env
   VITE_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Google Maps API Setup

The website includes an interactive Google Maps integration. To enable all features:

1. **Get API Key**: Visit [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. **Enable APIs**: 
   - Maps JavaScript API
   - Geocoding API
   - Places API
3. **Configure restrictions**: Add your domain to HTTP referrers
4. **Test setup**: Run `./test-api-key.sh` to verify configuration

For detailed setup instructions, see `GOOGLE_MAPS_SETUP.md`.

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Test Google Maps API
./test-api-key.sh
```

### Code Quality

- **ESLint** configuration for consistent code style
- **TypeScript** for type safety
- **Prettier** formatting (recommended)
- **DeepScan** integration for code quality monitoring

## 🌍 Features

### 🗺️ Interactive Google Maps
- **Enhanced location display** with custom markers
- **Nearby places integration** (restaurants, hotels, transport)
- **Multiple map styles** (roadmap, satellite, hybrid, terrain)
- **Time-based greetings** that change throughout the day
- **Street View integration** and location sharing
- **Graceful fallbacks** when APIs are limited

### 🌐 Internationalization
- **Multi-language support** (English/Polish)
- **Dynamic language switching**
- **Localized content** and date formats

### 🎨 UI/UX
- **Responsive design** for all screen sizes
- **Smooth animations** with Framer Motion
- **Modern component library** with Radix UI
- **Accessibility-first** approach
- **Dark/light theme** support

### 📱 Modern Features
- **Progressive Web App** capabilities
- **GDPR compliance** modal
- **Performance optimized** with lazy loading
- **SEO friendly** structure

## 🔧 Configuration

### Environment Variables

```env
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY="your-api-key"

# Additional environment-specific variables can be added here
```

### Deployment

The project is configured for easy deployment to:

- **Vercel** (recommended)
- **Netlify**
- **Any static hosting provider**

Build command: `npm run build`  
Output directory: `dist`

## 🐛 Troubleshooting

### Common Issues

1. **Google Maps not loading**
   - Check API key configuration
   - Verify enabled APIs in Google Cloud Console
   - Run `./test-api-key.sh` for diagnostics

2. **Build failures**
   - Ensure Node.js 18+ is installed
   - Clear node_modules and reinstall dependencies
   - Check TypeScript errors with `npm run lint`

3. **Translation issues**
   - Verify translation files in `src/locals/`
   - Check i18next configuration

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle size**: Optimized with code splitting and lazy loading
- **Image optimization**: WebP format with fallbacks

## 🤝 Contributing

This is a proprietary project for internal use. For development guidelines:

1. Follow the existing code style
2. Run linting before commits
3. Test thoroughly on multiple devices
4. Update documentation for new features

## 📜 License

This project is proprietary and intended for internal use only.  
© 2025 DTO Partners. All rights reserved.

---

## 📞 Support

For technical support or questions:
- **Development Team**: Internal development team
- **Issues**: Use the project issue tracker
- **Documentation**: See individual component documentation