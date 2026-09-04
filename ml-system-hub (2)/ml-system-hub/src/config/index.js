module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  logLevel: 'info',
  features: { registry: true, featureStore: true, pipelines: true, serving: true }
};
