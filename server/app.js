const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * * 클라이언트의 요청에 맞춰 함수 실행
 */
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  let filePath = fileUtils.getFilePath(req.url);
  let ext = fileUtils.getFileExtension(filePath);
  let contentType = fileUtils.getContentType(ext);
  if (req.method === "GET") {
    getMethod(req, res, filePath, contentType);
  }
})

/**
 * * get요청시 실행될 함수
 * @param {req} req 
 * @param {res} res 
 * @param {파일경로} filePath 
 * @param {컨텐츠타입} contentType 
 */
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


/**
 * * url에 따라 파일경로를 결정하는 생성자함수
 */
const fileUtils = {
  //*매개변수 url에 따른 파일 경로 할당
  getFilePath: function (url) {
    if (url === "/") {
      return path.join(__dirname, "../public/index.html");
    } else if (url.startsWith === "/dist") {
      return path.join(__dirname, `../dist/${url}`)
    } else {
      return path.join(__dirname, `../${url}`);
    }
  },
  //*파일 경로에 따른 파일 확장자 가져오기
  getFileExtension: function (filePath) {
    let ext = path.extname(filePath);
    return ext.toLowerCase();
  },
  //*파일 확장자에 따른 표기 반환
  getContentType: function (ext) {
    if (mimeType.hasOwnProperty(ext)) {
      return mimeType[ext];
    } else {
      return "text/plain";
    }
  },
};

const mimeType = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
};

//* 서버를 포트 8080에서 시작
const port = 8080;
server.listen(port, (err) => {
  if (err) {
    console.log("오류:", err);
  } else {
    console.log(`http://localhost:${port}`);
  }
});

