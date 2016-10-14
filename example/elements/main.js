const bel = require('bel')
const li = require('./li')

const main = () => {
  const cool_things = ['static sites', 'tachyons', 'bel', 'you']

  return bel`
    <main class="pa2 pa5-ns">
      <h1 class="f-6">Hello.</h1>
      <h2 class="f2">List of cool things</h2>
      <ul class="list pa0 ma0">
        ${cool_things.map( (item) => {
          return li(item)
        })}
      </ul>
    </main>
  `
}

module.exports = main
