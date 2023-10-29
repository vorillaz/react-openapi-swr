export const getApiUrl = (url: string): string => {
  const base = import.meta.env.VITE_API_URL;
  return `${base}${url}`;
};
