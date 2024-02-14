// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "DOBONG",
});
// TODO: 모델 코드

// 전체 데이터 조회
exports.getOneUser = (data, cb) => {
  console.log(data);
  const isSuccess = false;
  conn.query(`SELECT userid,pw FROM user where userid='${data.id}' and pw=${data.pw}`, (err, rows) => {
    if (err) {
      // console.error("쿼리 실행 중 오류 발생:", err);
      throw err;
    }
    // console.log("조회된 유저 : ", rows.length);
    if (rows.length > 0) {
      // console.log("검색 결과:", rows[0]);
      cb(rows[0]);
    } else {
      // console.log("검색 결과: 해당하는 사용자 없음");
      cb(null); // 사용자가 존재하지 않는 경우에도 콜백을 호출하여 처리 가능
    }
  });
};
