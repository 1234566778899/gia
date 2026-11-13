import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    // AVIF pesa ~20% menos que WebP; los navegadores que no lo soportan reciben WebP
    formats: ['image/avif', 'image/webp'],
    // Las imágenes importadas de forma estática ya tienen hash y caché permanente; esto cubre las de public/
    minimumCacheTTL: 2678400, // 31 días
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
