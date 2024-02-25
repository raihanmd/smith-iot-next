const nextConfig = {
  images: {
    domains: ["openweathermap.org"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.hotUpdateMainFilename =
        "static/webpack/[fullhash].[runtime].hot-update.json";
    }

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
