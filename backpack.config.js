module.exports = {
  webpack: (config, options, webpack) => {
    config.entry = { server: './server.js' }
    config.devtool = false
    return config
  }
}
