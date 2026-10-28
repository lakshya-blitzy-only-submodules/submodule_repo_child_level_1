console.log("Hello, World!");

const http = require("http");

http.createServer((req, res) => {
  if (req.url !== "/status") return res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": "application/json" }).end('{"status":"ok"}');
}).listen(process.env.PORT || 3000); // HOST omitted deliberately: listen() then binds all interfaces
