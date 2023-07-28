
import http from "http"

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    })
    res.write("hello");
    res.end();
}).listen(8088)