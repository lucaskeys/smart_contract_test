const path = require('path') //build a path from current compile file to inbox.sol
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8') // location and type of content

module.exports = solc.compile(source, 1).contracts[':Inbox']

