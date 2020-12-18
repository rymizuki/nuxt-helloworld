module.exports = {
  webpack: (config, options, webpack) => {
    config.entry = { server: './src/server.js' }
    config.devtool = false
    return config
  }
}
