const http = require("http");
const fs = require("fs"); // 파일 r/w 모듈
const { log } = require("console");

const PORT = 8080;
const server = http.createServer(function (req, res) {
  // console.log(req);
  // console.log(req.url);
  //   const data = fs.readFileSync("./index.html");
  /* res.writeHead(상태코드, 헤더정보)
        - text/html : 응답의 형식이 HTML 
        - charset : 인코딩방식 utf-8 
    */
  //   res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // res.write("응답완료!");
  // res.end("<h3>진짜 완료!!</h3>")
  //   res.write(data);
  //   res.end();

  /* 예외처리 try{ ~ } ~ catch(err){} 
  try 스코프 내부 문장에서 오류가 났을 때 catch 문으로 err를 보냄  
  */

  try {
    const data = fs.readFileSync("./index.html");
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.write(data);
    res.end();
  } catch (err) {
    console.log(err);
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.write(fs.readFileSync("./404.html"));
    res.end();
  } finally {
    // 예외 발생과 상관업이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행됨");
  }
});

// 1. request 이벤트 : 클라이언트 요청
server.on("request", function () {
  console.log("request 이벤트 발생");
});
// 2. connection 이벤트 : 클라이언트 접속시 발생
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});

server.listen(PORT, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${PORT}`);
});
