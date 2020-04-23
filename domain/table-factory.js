const Table = require('./table')
const LanguageData = require('./language-data')

class TableFactory {
  /**
   * Creates the table from the list of vinyls.
   * @param {Vinyl[]} files The files (vinyls)
   * @return {Table}
   */
  createFromVinyls (files) {
    const table = new Table()

    files.forEach(file => {
      // Suppose file.relative is langTag
      const langTag = file.relative.replace(/\.[^/.]+$/, '')
      const data = JSON.parse(file.contents.toString())

      table.addLanguageData(new LanguageData(langTag, data))
    })

    return table
  }
}

module.exports = TableFactory
