// Using Node.js's built-in http module, create an HTTP server
// that runs on port 3000 and returns a JSON response for every request for every request containing id:

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify({  name: "laptop", id:1 }));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});