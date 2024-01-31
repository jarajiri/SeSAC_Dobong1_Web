const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8081;
const path = require("path");

/* 미들웨어 */
/* view */
app.set("view engine", "ejs");
app.set("views", "./views");
/* multer */
const upload = multer({
  dest: "uploads/",
});
/* multer detail 설정
-storage : 저장공간에 정보
    diskStorage : 파일을 저장하기 위한 모든 제어 기능 제공
    - destination : 저장경로
    - filename : 파일 이름 관련 정보
-limits : 파일 제한 관련 정보
    fileSize : 파일 사이즈를 바이트 단위로 제한
*/
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); // path 모듈 사용시 require 필요
      done(null, path.basename(file.originalname, extension) + Date.now() + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

/* static */
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/public"));
// console.log("현재 위치한 폴더의 경로", __dirname);
// app.use('/이 이름으로 사용할 것',express.static(실제폴더경로())

/* body-phaser */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index.ejs");
});

// app.post("/upload", upload.single("userfile"), function (req, res) {
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  // 한개
  console.log(req.file);

  /* 
  {
      fieldname: 'userfile', // 폼에 정의한 name 값
      originalname: 'small_img.png', // 원본 파일명
      encoding: '7bit', // file encoding type
      mimetype: 'image/png', // 파일 타입
      destination: 'uploads/', // 파일 저장 경로
      filename: '22e7991be4350c3ad4887339670f0b3b', // 저장된 파일이름
      path: 'uploads/22e7991be4350c3ad4887339670f0b3b', // 경로포함된 파일 이름
      size: 2441 // 파일 크기
    }
    */

  console.log(req.body);
  res.send("업로드 완료");
});

app.post("/uploads/array", uploadDetail.array("multifiles"), function (req, res) {
  // 여러개 1
  console.log(req.files); //files로 수정, 배열로 요청됨, 하나의 파일만 업로드해도 배열
  console.log(req.body);
  res.send("업로드 완료");
});

app.post(
  "/uploads/fields",
  uploadDetail.fields([{ name: "file1" }, { name: "file2" }, { name: "file3" }]),
  function (req, res) {
    // 여러개 2
    console.log(req.files);
    /* 
    {file1:[{}], file2:[{}], name속성:[{},{},...]} */
    console.log(req.body);
    res.send("업로드 완료");
  }
);
//동적 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  //   res.send({...req.file, ...req.body});
  res.send({ fileInfo: req.file, title: req.body });
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
