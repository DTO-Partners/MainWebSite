# DTO Partners Frontend

[![DeepScan grade](https://deepscan.io/api/teams/27171/projects/29731/branches/951272/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=27171&pid=29731&bid=951272)

> Modern React frontend for DTO Partners website with enhanced Google Maps integration and internationalization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your Google Maps API key to .env
# VITE_GOOGLE_MAPS_API_KEY="your-api-key"

# Start development server
npm run dev
```

## 📋 Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `./test-api-key.sh` - Test Google Maps API configuration

## 🗺️ Google Maps Setup

The website features an enhanced Google Maps integration. To enable all features:

1. **Get API Key**: Visit [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. **Enable APIs**: 
   - Maps JavaScript API ✅
   - Geocoding API ❌ (currently restricted)
   - Places API ❌ (currently restricted)
3. **Configure restrictions**: Add your domain to HTTP referrers
4. **Test setup**: Run `./test-api-key.sh` to verify

See `GOOGLE_MAPS_SETUP.md` for detailed troubleshooting.

## 🛠️ Tech Stack

### Core
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite 6.x** - Fast build tool and dev server
- **Tailwind CSS 4.x** - Utility-first styling

### Key Libraries
- **@vis.gl/react-google-maps** - Interactive maps
- **Framer Motion** - Smooth animations
- **i18next** - Multi-language support
- **Radix UI** - Accessible components
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base components (Button, Input, etc.)
│   ├── NavBar.tsx      # Navigation with language switcher
│   ├── WorldMap.tsx    # Interactive world map
│   └── GDPRModal.tsx   # Privacy compliance
├── sections/           # Main page sections  
│   ├── Hero.tsx        # Landing hero with animations
│   ├── About.tsx       # Company information
│   ├── Industries.tsx  # Industry focus areas
│   ├── Markets.tsx     # Global market presence
│   ├── Values.tsx      # Company values
│   ├── Apply.tsx       # Contact/application form
│   └── Footer.tsx      # Enhanced footer with Google Maps
├── lib/                # Utilities and configurations
├── locals/             # Translation files (en.json, pl.json)
├── theme/              # CSS theme and styling
└── types/              # TypeScript type definitions
```

## 🌍 Key Features

### Interactive Google Maps
- **Enhanced location display** with custom markers
- **Nearby places** (restaurants, hotels, transport)
- **Multiple map styles** and time-based greetings
- **Street View integration** and location sharing
- **Graceful fallbacks** when APIs are limited

### Internationalization
- **Multi-language support** (English/Polish)
- **Dynamic language switching** in navigation
- **Localized content** and formatting

### Modern UI/UX
- **Responsive design** for all devices
- **Smooth animations** with Framer Motion
- **Accessibility-first** approach
- **Performance optimized** with lazy loading

## 🔧 Environment Variables

```env
# Required: Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# Optional: Additional configuration
# VITE_APP_ENV="development"
```

## 🚀 Deployment

Optimized for deployment to:
- **Vercel** (recommended)
- **Netlify** 
- **Any static hosting**

Build command: `npm run build`  
Output directory: `dist`

## 🐛 Troubleshooting

### Google Maps Issues
```bash
# Test your API configuration
./test-api-key.sh

# Common fixes:
# 1. Enable required APIs in Google Cloud Console
# 2. Check HTTP referrer restrictions
# 3. Verify billing is enabled
```

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run lint
```

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle optimization**: Code splitting and lazy loading
- **Image optimization**: WebP with fallbacks
- **Core Web Vitals**: Excellent user experience
```bash
npm run dev
```

---

## 🔑 Environment Variables

To configure environment variables, create a `.env.development` file in the root directory. Example:

```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key
```

Access these variables in your code using `import.meta.env`:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---