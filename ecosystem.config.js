module.exports = {
  apps: [
    {
      name: 'fake-udigital',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        API_PATH: 'http://localhost:1337',
      },
      env_production: {
        NODE_ENV: 'production',
        API_PATH: 'http://fake-udigital-cms.sestud.io',
      },
    },
  ],
};
