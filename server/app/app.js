const http = require("http");

// 서버 포트 설정
const PORT = process.env.PORT || 3000;

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Tekton!\n");
});

// 서버 시작
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
