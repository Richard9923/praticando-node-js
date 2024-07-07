const http = require('http');
const PORT = 7000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    res.end('Hello Worl!')
})

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})