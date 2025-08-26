// utils/getImageSrc.ts
export const getImageSrc = (image?: string): string => {
  if (!image) return "/placeholder.png"; // fallback image
//   return `/images/${image}`; // public/images/ से load होगा
     return `/${image}`;
};
