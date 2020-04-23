const { describe, it } = require('kocha')
const { execSync } = require('child_process')
const { existsSync, readFileSync } = require('fs')
const { join } = require('path')
const assert = require('assert')

describe('langsheet', () => {
  it('builds html site', () => {
    execSync('rm -rf example/build')
    execSync('node ../index.js build', { cwd: join(__dirname, 'example') })
    assert(existsSync('./example/build/index.html'))
  })

  it('builds same html', () => {
    execSync('rm -rf example/build')
    execSync('node ../index.js build', { cwd: join(__dirname, 'example') })
    const htmlStr = readFileSync('./example/build/index.html', 'utf-8')
    const builtHtml = readFileSync('./test.html', 'utf-8')
    assert(htmlStr === builtHtml)
  })

  it('throws if the source option not specified', () => {
    assert.throws(() => {
      execSync('node ../index.js build', { cwd: join(__dirname, 'example-fail') })
    }, Error)
  })
})
