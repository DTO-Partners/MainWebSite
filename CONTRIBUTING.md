# Contributing to DTO Partners Website

Thank you for your interest in contributing to the DTO Partners website. This document provides guidelines for development and contribution.

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Maps API key (for full functionality)

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`
4. Add your Google Maps API key
5. Start development: `npm run dev`

## 📝 Code Standards

### TypeScript
- Use TypeScript for all new components
- Define proper interfaces for props and state
- Avoid `any` types - use proper typing

### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow React 19 best practices
- Use Suspense for lazy loading

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS variables for theme consistency

### Code Organization
```
src/
├── components/     # Reusable components
│   └── ui/        # Base UI components
├── sections/      # Page-specific sections
├── lib/           # Utilities and helpers
├── types/         # TypeScript definitions
└── theme/         # Styling and themes
```

## 🎯 Component Guidelines

### Creating New Components
1. Use TypeScript with proper interfaces
2. Include JSDoc comments for props
3. Implement accessibility features
4. Add proper error handling
5. Make components responsive

### Example Component Structure
```tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable button component with multiple variants
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-medium transition-colors',
          {
            'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

## 🌍 Internationalization

### Adding New Translations
1. Add keys to `src/locals/en.json`
2. Add corresponding translations to `src/locals/pl.json`
3. Use the `useTranslation` hook in components

### Translation Guidelines
- Use descriptive keys: `sections.about.title`
- Keep translations concise but clear
- Consider cultural context for Polish translations
- Test both languages thoroughly

## 🗺️ Google Maps Integration

### API Requirements
- Maps JavaScript API (required)
- Geocoding API (for address lookups)
- Places API (for nearby places feature)

### Testing Maps Features
```bash
# Test API configuration
./test-api-key.sh

# Check specific APIs
curl "https://maps.googleapis.com/maps/api/geocode/json?address=test&key=YOUR_KEY"
```

### Handling API Limitations
- Provide fallback UI when APIs are restricted
- Show clear error messages
- Gracefully degrade functionality

## 🚀 Performance Guidelines

### Code Splitting
- Lazy load route components
- Split large feature components
- Use dynamic imports for heavy libraries

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading
- Optimize image sizes for different screens

### Bundle Optimization
- Analyze bundle size with `npm run build`
- Remove unused dependencies
- Use tree shaking effectively

## 🧪 Testing

### Manual Testing Checklist
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify responsive design on different screen sizes
- [ ] Test keyboard navigation and accessibility
- [ ] Verify both language versions work correctly
- [ ] Test Google Maps functionality (if API key available)
- [ ] Check performance with Lighthouse

### Accessibility Testing
- Use screen reader testing
- Verify keyboard navigation
- Check color contrast ratios
- Test with browser zoom at 200%

## 🔍 Code Review Process

### Before Submitting
1. Run `npm run lint` and fix any issues
2. Test your changes thoroughly
3. Verify responsive design
4. Check both language versions
5. Update documentation if needed

### Review Criteria
- Code follows established patterns
- TypeScript types are properly defined
- Accessibility features are implemented
- Performance impact is considered
- Documentation is updated

## 📱 Responsive Design

### Breakpoints
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized loading for mobile networks

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use `VITE_` prefix for client-side variables
- Validate all external inputs
- Sanitize user-generated content

### API Keys
- Restrict API keys to specific domains
- Use environment-specific keys
- Monitor API usage and quotas
- Implement proper error handling

## 📚 Resources

### Documentation
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Maps API](https://developers.google.com/maps/documentation)

### Tools
- [VS Code Extensions](https://code.visualstudio.com/docs/languages/typescript)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)

## 🤝 Getting Help

For questions or support:
- Check existing documentation
- Review similar implementations in the codebase
- Ask team members for guidance
- Create detailed issue descriptions

---

Thank you for contributing to the DTO Partners website! Your efforts help maintain a high-quality, professional web presence.
