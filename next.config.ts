// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita o modo estrito para encontrar problemas comuns de desenvolvimento
  images: {
    domains: ['example.com'], // Permite carregar imagens de URLs externas, se necessário
  },
  pwa: {
    disable: true, // Desativa o PWA (se você não precisa do service worker)
  },
  // Outras configurações podem ser adicionadas aqui
};

export default nextConfig;
