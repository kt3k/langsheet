const { asset, name, on, port, debugPagePath, debugPageTitle, loggerTitle } = require('berber')
const pkg = require('./package')
const pipeline = require('./pipeline')
const path = require('path')

name(pkg.name)

loggerTitle(pkg.name)

debugPagePath(`__${pkg.name}__`)
debugPageTitle(`<i>${pkg.name}</i> debug page`)

on('config', config => {
  if (!config.source) {
    console.log(`Error: 'source' is not specified.\nSee ${pkg.homepage} for details.`)
    process.exit(1)
  }

  port(config.port || 26000)

  pipeline(asset(config.source), config)

  asset(path.join(__dirname, 'tacit.min.css')).base(__dirname)
})
