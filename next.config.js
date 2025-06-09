require('dotenv').config({ path: '.env.local' });

const nextConfig = {
  reactStrictMode: true,
  // Static files are served from the `public` directory by default
};

module.exports = nextConfig;
