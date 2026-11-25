import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      // Páginas independientes de The Rings Method, servidas tal cual
      // (HTML propio con Tailwind CDN) desde /public.
      {
        source: "/masterclass",
        destination: "/masterclass/index.html",
      },
      {
        source: "/masterclass/",
        destination: "/masterclass/index.html",
      },
      {
        source: "/speakers",
        destination: "/speakers/index.html",
      },
      {
        source: "/speakers/",
        destination: "/speakers/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: true,
      },
      // Evita que se indexe la URL del archivo interno.
      {
        source: "/masterclass/index.html",
        destination: "/masterclass/",
        permanent: true,
      },
      {
        source: "/speakers/index.html",
        destination: "/speakers/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
