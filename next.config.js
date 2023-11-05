// Validate schema on build (recommended)
// We recommend you importing your newly created file in your next.config.mjs. This will make sure your environment variables are validated at build time which will save you a lot of time and headaches down the road.
// import "./env";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
