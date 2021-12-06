const http = require('http')

const server = http.createServer((req , res)=>{
    if(req.url === '/') 
    {
        res.end('welcome to the home page of webapp');
    }
    if(req.url === '/about')
    {
        res.end('welcome to the about page of the webapp');
    }
    if(req.url === '/error')
    {
        res.end(`<h1>Ooops!!</h1>
        <p>can't seem to find the page you are looking for....</p>
        <a href="/">back home</a>
        `)
    }
    // res.write('welcome to our home page and this is interesting page')
    
})

server.listen(5000)