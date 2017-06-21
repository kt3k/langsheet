const { join } = require('path')
const acc = require('vinyl-accumulate')
const layout1 = require('layout1')
const pkg = require('./package')
const sourceLayout = join(__dirname, 'layout.njk')
const through2 = require('through2')
const { Table } = require('./domain')

const factory = new Table.Factory()

/**
 * @param {AssetFacade} source The source asset
 * @return {AssetFacade}
 */
const pipeline = source => source
  .pipe(acc('index.html', { debounce: true }))
  .pipe(through2.obj((file, _, cb) => cb(null, Object.assign(file.clone(), {
    table: factory.createFromVinyls(file.files)
  }))))
  .pipe(layout1.nunjucks(sourceLayout, { data: { pkg } }))

module.exports = pipeline
