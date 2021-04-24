// nmp - global command, come with node
// npm --version

// local dependency - use it only in particular project
// npm i <packageName>

// global dependency - use it globally
// npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json - manifest file (stores important info aboat package/project)
// manual approach (create package.json in the root, create properties and etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const item = _.flattenDeep(items)
console.log(item);