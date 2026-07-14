const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = 8080;

const mime = {
  html: 'text/html',
  js: 'application/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  json: 'application/json',
  woff2: 'font/woff2',
  woff: 'font/woff',
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url === '/' ? '/forge-demo.html' : req.url);
  const file = path.join(root, url);

  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + req.url);
      return;
    }
    const ext = path.extname(file).slice(1).toLowerCase();
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log(`Forge Fitness server running at http://localhost:${port}`);
  console.log(`On your phone (same WiFi): http://10.0.0.51:${port}`);
});
