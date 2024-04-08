const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const app = express();
dotenv.config();

const PORT = process.env.PORT;

//미들웨어
app.set("view engine", "ejs");

//aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AW3_S3_REGION,
});

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AW3_S3_BUCKET,
    acl: "public-read", // 업로드된 파일을 읽을수있도록 파일 접근 권한 설정
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

// GET / index.ejs 렌더링
app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

// POST /upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  //   {
  //     fieldname: 'image',
  //     originalname: 'apple.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     size: 235310,
  //     bucket: 'sesac-bucket-rime',
  //     key: '1712555838299-apple.jpg',
  //     acl: 'public-read',
  //     contentType: 'application/octet-stream',
  //     contentDisposition: null,
  //     contentEncoding: null,
  //     storageClass: 'STANDARD',
  //     serverSideEncryption: null,
  //     metadata: null,
  //     location: 'https://sesac-bucket-rime.s3.ap-northeast-2.amazonaws.com/1712555838299-apple.jpg',
  //     etag: '"7c479f62fd90c37e68879f5505761339"',
  //     versionId: undefined
  //   }
  res.render("index", { imageUrl: req.file.location });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
