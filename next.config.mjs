/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    // domains: ["ddragon.leagueoflegends.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/**",
      },
    ],
  },
};

export default NextConfig;
