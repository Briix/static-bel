const bel = require('bel')

const li = (item) => {
  return bel`
    <li class="f3 lh-copy hover-bg-light-blue pa1">${item}</li>
  `
}

module.exports = li
