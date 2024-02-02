const express = require("express");

const app = express();
const PORT = 8082;
const path = require("path");
const fs = require("fs");
const multer = require("multer");

try {
  fs.readdirSync("uploads"); // 폴더 확인
} catch (err) {
  console.error("uploads 폴더가 없습니다. 폴더를 생성합니다.");
  fs.mkdirSync("uploads"); // 폴더 생성
}

// const uploadPath = multer({
//   dest: "uploads/",
// });
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      //   done(null, path.basename(file.originalname, extension) + extension);
      done(null, path.basename(req.body.name, extension) + extension);
    },
    /* 이렇게도 사용가능 */
    /* 
    destination(req,file,done){
        codes~~
    }
    */
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("profile"), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  res.render("mypage", {
    userInfo: req.body,
    profile: req.file,
  });
});

app.listen(PORT, function (req, res) {
  console.log("server open");
  console.log(`http://localhost:${PORT}`);
});
