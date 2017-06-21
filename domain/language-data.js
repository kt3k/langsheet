
/**
 * The phrase data for a language
 */
class LanguageData {
  /**
   * @param {string} langTag
   * @param {Object<string>} data
   */
  constructor (langTag, data) {
    this.langTag = langTag
    this.data = data
    this.keys = Object.keys(data)
  }

  /**
   * Gets the phrase by the key.
   * @param {string} key The phrase key
   */
  getByKey (key) {
    return this.data[key]
  }
}

module.exports = LanguageData
