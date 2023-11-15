/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IP_GEOLOCATION_API_KEY: process.env.IP_GEOLOCATION_API_KEY,
  },
};

module.exports = nextConfig;
