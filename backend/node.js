// write a program to create a basic http server that handles differnt url routes.
// the serverr should;
// display "home page" when the user visits;
// display "about page" when the user visits /about
// return a 404 staus code and display "page not found"for any invalid url;
// prvide a linkl to return to this page to the home page onthe 404 page


// run the server on port 3000
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.write("Home Page");
        res.end();
    }

    else if (req.url == "/about") {
        res.write("About Page");
        res.end();
    }

    else {
        res.write(" 404 Page Not Found");
        res.end();
    }

});
server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});

