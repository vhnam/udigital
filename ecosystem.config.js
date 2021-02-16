module.exports = {
  apps: [
    {
      name: 'fake-udigital',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: 3000,
        API_PATH: 'http://localhost:1337',
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 13000,
        API_PATH: 'http://fake-udigital-cms.sestud.io',
      },
    },
  ],
};
