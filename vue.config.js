module.exports = {
  devServer: {
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://traffiCondition.v1.cdqianyun.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}