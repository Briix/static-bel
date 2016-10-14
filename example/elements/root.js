const bel = require('bel')
const head = require('./head')
const main = require('./main')

const root = bel`
  <html>
    ${head("Static bel example")}
    <body class="ba bw4 min-vh-100">
      ${main()}
    </body>
  </html>
`

module.exports = root
