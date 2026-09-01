const http = require ("http");
const server = http.createServer((req, res)=>{
    console.log(req.method);
    res.end("Request received");
});
server.listen(3000);


// http://localhost:3000