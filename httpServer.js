const fs = require("fs");

const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  console.log("incoming request");
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.write(data);
    }
  });
});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`server running on ${port}`);
  }
});
