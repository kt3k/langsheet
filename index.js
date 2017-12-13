#!/usr/bin/env node

const {
  asset,
  name,
  on,
  port,
  dest,
  debugPagePath,
  debugPageTitle,
  loggerTitle
} = require('berber')
const pkg = require('./package')
const pipeline = require('./pipeline')

name(pkg.name)

loggerTitle(pkg.name)

debugPagePath(`__${pkg.name}__`)
debugPageTitle(`<i>${pkg.name}</i> debug page`)

const defaultConfig = {
  port: 26000,
  dest: 'build',
  title: 'Language Data Table'
}

on('config', config => {
  config = Object.assign({}, defaultConfig, config)

  if (!config.source) {
    console.log(`Error: 'source' is not specified.\nSee ${pkg.homepage} for details.`)
    process.exit(1)
  }

  port(config.port)
  dest(config.dest)

  pipeline(asset(config.source), config)
})
