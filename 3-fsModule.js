// this is the fs module in javascript
const {readFileSync , writeFileSync } = require('fs')
console.log(readFileSync)

const first = readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/second.txt' , 'utf8')

writeFileSync('./content/result-synt.txt' , `here is the result : ${first} , ${second}`)
console.log(first , second)