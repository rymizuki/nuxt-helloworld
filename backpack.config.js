module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.server = './server.js'
    return config
  }
}
