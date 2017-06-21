const _ = require('lodash')

/**
 * The language and phrase table.
 */
class Table {
  constructor () {
    this.keys = []
    this.langData = {}
  }

  /**
   * Adds the language data.
   * @param {LanguageData} data The language data
   */
  addLanguageData (data) {
    this.addKeys(data.keys)
    this.langData[data.langTag] = data
  }

  /**
   * Adds the phrase keys.
   * @param {string[]}
   */
  addKeys (keys) {
    this.keys = _.uniq([].concat(this.keys, keys))
  }

  /**
   * Gets the value by the language tag and phrase key.
   * @param {string} langTag The language tag
   * @param {string} key The phrase key
   */
  getPhrase (langTag, key) {
    return this.langData[langTag].getByKey(key)
  }

  /**
   * Returns the list of language tags.
   * @return {string[]}
   */
  languageTags () {
    return Object.keys(this.langData)
  }
}

module.exports = Table
