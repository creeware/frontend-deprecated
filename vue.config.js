module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  }
};
