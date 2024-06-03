//10-2-Optimizing Images

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ]
},
  //1-Here we pass the configuration
  images: {
    remotePatterns: [
      //2-Here we add one or more domains where we're allowed to serve
      //images.This is for security reason because otherwise anyone can
      //take advantage of the endpoint that next JS exposes for serving
      //optimized images.
      {
        protocol: "https",
        hostname: "bit.ly",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
