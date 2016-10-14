#!/usr/bin/env node

require('babel-register')({
  presets: [
    'es2015'
  ]
})

const bel = require('bel')
const path = require('path')
const program = require('commander')
const minify = require('html-minifier').minify;

const version = '0.2.0'

program
  .version(version)
  .option('[element]', 'Root bel element')
  .option('--no-doctype', 'Don\'t add <!DOCTYPE html> to the beginning of document')
  .parse(process.argv)

if (program.args.length) {
  let html

  const dir = process.cwd()
  const file = path.join(dir, program.args[0])
  const element = require(file)

  if (!element) {
    console.error('No element found at', file)
    return false
  }

  html = minify(element.toString(), {
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true
  })

  if (program.doctype) {
    html = '<!DOCTYPE html>' + html
  }

  process.stdout.write(html)
}
