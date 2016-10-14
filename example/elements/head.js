const bel = require('bel')

const head = (title) => {
  return bel`
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.3/css/tachyons.min.css">
    </head>
  `
}

module.exports = head
