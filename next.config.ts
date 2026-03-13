import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Aktiviert den statischen Export
  eslint: {
    ignoreDuringBuilds: true, // Ignoriert Linting-Fehler während des Builds
  },
  images: {
    unoptimized: true, // Erforderlich für statischen Export
    formats: ['image/webp', 'image/avif'], // Moderne Bildformate
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Komprimierung für Produktions-Build
  compress: true,

};

export default nextConfig;
