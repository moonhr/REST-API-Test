const http = require("http");
const fs = require("fs");
const path = require("path");
const mimeType = require("./mimeType.js");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  let filePath = fileUtils.getFilePath(req.url);
  let ext = fileUtils.getFileExtension(filePath);
  let contentType = fileUtils.getContentType(ext);
  if (req.method === "GET") {
    getMethod(req, res, filePath, contentType);
  }
})

function getMethod(req, res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found: 요청하신 파일을 찾을 수 없습니다.");
      console.log("오류 발생:", err);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

