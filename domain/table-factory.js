const Table = require('./table')
const LanguageData = require('./language-data')
const { basename, extname } = require('path')

class TableFactory {
  /**
   * Creates the table from the list of vinyls.
   * @param {Vinyl[]} files The files (vinyls)
   * @return {Table}
   */
  createFromVinyls (files) {
    const table = new Table()

    files.forEach(file => {
      // Supposes filename is [langTag].json
      const langTag = basename(file.path, extname(file.path))
      const data = JSON.parse(file.contents.toString())

      table.addLanguageData(new LanguageData(langTag, data))
    })

    return table
  }
}

module.exports = TableFactory
