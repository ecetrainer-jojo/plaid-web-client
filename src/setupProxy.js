const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: process.env.REACT_APP_API_HOST || 'http://ecetrainerTrader.us-east-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};


//http://ecetrainerTrader.us-east-2.elasticbeanstalk.com