export const APP_CONFIG = {
  name: 'ApexBart Solutions',
  description: 'AI, Voice Recording & Automation Solutions',
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 10000,
  },
  routes: {
    public: ['/', '/about', '/services', '/contact'],
    auth: ['/signup', '/login'],
    protected: ['/dashboard', '/profile', '/settings'],
  },
  theme: {
    colors: {
      primary: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
      secondary: {
        light: '#a5b4fc',
        DEFAULT: '#818cf8',
        dark: '#6366f1',
      },
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATIONS = {
  pageTransition: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
} as const; 