module.exports = {
  i18n: {
    locales: ["el"],
    defaultLocale: "el",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.motify.gr",
        port: "",
        pathname: "/power-trust/**",
      },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/blog": ["./blog/index.js"],
    },
  },
};
