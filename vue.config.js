module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
                ignored: /node_modules/
            }
        }
    }
}
  