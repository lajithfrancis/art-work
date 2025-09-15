import { getBaseUrl } from './baseUrl';

export const getAssetPath = (path: string): string => {
  const base = getBaseUrl();
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};
