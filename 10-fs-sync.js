const {readFileSync, writeFileSync} = require('fs')
console.log('starting the task');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second);

writeFileSync('./content/result-sync.txt', `This is the sync result : ${first}, ${second}`, {flag: 'a'})

console.log('done with the task');
console.log('starting the next task');