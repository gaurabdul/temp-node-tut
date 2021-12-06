// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//console.log("dir is following " + __dirname);
//console.log("filename is " + __filename);
// no window object is there in the nodejs because there is no browser
// setInterval(()=>console.log("hello...."), 1000);

// modules



// const names = require('./prop')
// const sayHi = require('./method')

// console.log(names)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

const os=require('os')

// info about current user
const user=os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
