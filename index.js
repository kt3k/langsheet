const { asset, name, on, port, loggerTitle } = require('berber')
const pkg = require('./package')
const pipeline = require('./pipeline')
const path = require('path')

name('m26t')

loggerTitle('m26t')

on('config', config => {
  if (!config.source) {
    console.log(`Error: 'source' is not specified.\nSee ${pkg.homepage} for details.`)
    process.exit(1)
  }

  port(config.port || 26000)

  pipeline(asset(config.source))

  asset(path.join(__dirname, 'tacit.min.css')).base(__dirname)
})
