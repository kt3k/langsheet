const { describe, it } = require('kocha')
const { execSync } = require('child_process')
const { existsSync } = require('fs')
const { join } = require('path')
const assert = require('assert')

describe('langsheet', () => {
  it('builds html site', () => {
    execSync('rm -rf example/build')
    execSync('node ../index.js build', { cwd: join(__dirname, 'example') })
    assert(existsSync('./example/build/index.html'))
  })

  it('throws if the source option not specified', () => {
    assert.throws(() => {
      execSync('node ../index.js build', { cwd: join(__dirname, 'example-fail') })
    }, Error)
  })
})
