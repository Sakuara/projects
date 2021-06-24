module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      loader: 'less-loader',
      options: {
          lessOptions: {
              modifyVars: { // 修改主题变量
                // 's
              },
              javascriptEnabled: true
          }
      }
    }]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
  }
};
