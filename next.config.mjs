/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder images shipped in /public are SVGs; allow them to be
    // optimized. Safe to remove once you swap in real photos/screenshots.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
