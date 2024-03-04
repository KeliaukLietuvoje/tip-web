const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://dev.tip.ntis.lt/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      headers: {
        Connection: 'keep-alive',
      },
    }),
  );
};
