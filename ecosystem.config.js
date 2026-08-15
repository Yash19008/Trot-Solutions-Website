module.exports = {
  apps: [
    {
      name: "trot-website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4000",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      },
    },
  ],
};
