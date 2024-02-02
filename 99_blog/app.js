const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8085;

/* temp DB */
let tempDB = [
  {
    contentID: 1,
    title: "안녕",
    content: "안녕하세요? 대답.",
    img: null, // null or path(string)
  },
  {
    contentID: 2,
    title: "하세요",
    content: "안녕하세요? 대답.",
    img: null, // null or path(string)
  },
  {
    contentID: 3,
    title: "대답",
    content: "안녕하세요? 대답.",
    img: null, // null or path(string)
  },
];
const userID = "rimeboret";

/* 미들웨어 
    요청(req)과 응답(res) 사이에서 중간다리 역할을 하는 SW
    1) request의 body를 서버에서 읽을 수 있도록 도와주는 body-parser
    2) reuest의 file에서 보내는 파일 정보를 확인할 수 있도록 도와주는 multer
    3) static 파일 설정을 도와주는 app.use(express.static(~~))
*/

/*
    미들웨어1. views 설정 set() 이용
    - view란?
        사람들 눈에 보이는 화면, 프론트단 html
        view 설정
        1. html 파일들을 어디서 모아둘건지(views 폴더 설정)
        2. html 을 보여주기 위해서 어떻게 할건지 (view engine)
    - view engine (ejs)
        서버에서 보낸 js 변수를 클라이언트에서 사용할 수 있도록 도움
        pug, ejs, nunjucks, .. 등
 */
app.set("view engine", "ejs");
app.set("views", "./views");

/*
    미들웨어2. static 폴더 설정
    - static 폴더란?
        외부(브라우저 등의 클라이언트)에서 접근 가능한 폴더 
        js, css, 이미지, 동영상 등
 */
app.use("/static", express.static(__dirname + "/public")); // 인자를 2개쓰면 가상경로
app.use("/uploads", express.static(__dirname + "/uploads"));

/*
    미들웨어3. body-parser 설정 (express 내장 모듈)
    -req.body 는 로그로 확인했을 시 기본적으로 undefined
        body-parser가 req.body를 서버측에서 사용할 수 있도록 파싱해줌
 */
app.use(express.urlencoded({ extended: false }));
// true : queryString 모듈 사용, false : qs 모듈 사용, qs모듈이 보안상 성능이 더 우수하다..
app.use(express.json());
// 요청 body에서 json정보만 가지고 오도록

/*
    미들웨어4. multer 설정 (npm install multer로 설치가 필요!)
    - req.body input type='file' 의 정보는 기본적으로 string
        실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용

 */
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      /* 
        extname(파일명): 확장자 추출
        basename(파일명, 확장자): 확장자를 제외한 파일명 추출
        basename(경로명): 파일명 추출 (확장자 포함)
      */
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

/* 
    라우팅:
    특정 url로 method에 대한 요청 처리
    -url : 사용자가 정한 url
    -method : get, post, put, patch, delete
      CRUD를 위한 것(CRUD: 데이터를 create, read, update, delete)
      1. get:'R'ead, 
      브라우저의 url에 주소를 입력하는 것은 모두 get요청!!
      localhost:8080/sesac 의 화면을 보기 위해서는
      /sesac의 get요청에 대한 응답(response)이 있어야 볼 수 있다.
      res.send() res.end() res.write() res.render(), ..

      2. post: 'C'reate 새로운 정보를 '입력' '추가'할 때
      3. put & patch: 'U'pdate
        수정 관련 메소드
      4. delete: 삭제   
*/

app.get("/", (req, res) => {
  res.render("index", {
    user: userID,
    data: tempDB,
  });
});

/* 
    params vs query
    - params
        - 서버에서 url 표기 /:params
        - 클라이언트에서 요청시 /123
        - req.params 에서 정보 확인가능 {params:'123'}
        - 네이버 블로그처럼 여러 계정의 글을 '조회'할때 사용
    - query
        - 서버에서 url 표기 /sesac
        - 클라이언트에서 url 표기 /sesac?id=123&content=aaa
        - req.query 에서 정보 확인 가능
        - 검색, 필터링 기능시 사용
        
*/
app.get("/content/:contentID", (req, res) => {
  //   console.log(req.params);
  const { contentID } = req.params;
  const isContent = tempDB.filter((obj) => obj.contentID === Number(contentID))[0];
  // filter() = 조건에 만족하는 결과를 '배열'로 반환
  console.log(isContent); // {} or undefined
  if (isContent) {
    res.render("content", isContent);
  } else {
    res.render("404");
  }
});

// 새글 작성하기 화면 렌더링
app.get("/write", (req, res) => {
  res.render("writeContent");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.post("/blog/post", upload.single("img"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  tempDB.push({
    contentID: tempDB.length !== 0 ? tempDB[tempDB.length - 1].contentID + 1 : 1,
    title: req.body.title,
    content: req.body.content,
    img: req.file ? req.file.path : null,
  });
  console.log(tempDB);
  res.redirect("/");
});

app.delete("/blog/delete", (req, res) => {
  console.log(req.query);
  const { contentID } = req.query;
  tempDB = tempDB.filter((obj) => obj.contentID !== Number(contentID));
  console.log(tempDB);
  res.end();
});

app.listen(PORT, (req, res) => {
  console.log("server open");
  console.log(`http://locathost:${PORT}`);
});
