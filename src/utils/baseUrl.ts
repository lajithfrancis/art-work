export const getBaseUrl = (): string => {
  if (typeof window === 'undefined') {
    return '/';
  }

  const hostname = window.location.hostname;
  
  // GitHub Pages
  if (hostname.includes('github.io')) {
    return '/art-work/';
  }
  
  // Local development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return '/';
  }
  
  // Custom domain
  return '/';
};
