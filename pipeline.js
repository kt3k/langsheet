const { join } = require('path')
const acc = require('vinyl-accumulate')
const layout1 = require('layout1')
const pkg = require('./package')
const sourceLayout = join(__dirname, 'layout.njk')
const through2 = require('through2')
const { Table } = require('./domain')
const fs = require('fs')

const factory = new Table.Factory()
const css = fs.readFileSync(join(__dirname, 'tacit.min.css'))

/**
 * @param {AssetFacade} source The source asset
 * @param {Object} options The options
 * @return {AssetFacade}
 */
const pipeline = (source, options) => source
  .pipe(acc('index.html', { debounce: true }))
  .pipe(through2.obj((file, _, cb) => cb(null, Object.assign(file.clone(), {
    table: factory.createFromVinyls(file.files)
  }))))
  .pipe(layout1.nunjucks(sourceLayout, { data: { pkg, options, css } }))

module.exports = pipeline
