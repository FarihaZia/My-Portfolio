import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images :{
    remotePatterns :[
      {
        hostname : 'www.google.com',
        protocol : 'https'
      },
      {
        hostname : 'assets.aceternity.com',
        protocol : 'https'
      }
    ]
  }
};

export default nextConfig;
