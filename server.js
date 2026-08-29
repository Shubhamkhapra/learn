import http from 'node:http';

const PORT = 3002;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message: 'Server is running successfully!',
      port: PORT,
      url: req.url,
      timestamp: new Date().toISOString(),
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
