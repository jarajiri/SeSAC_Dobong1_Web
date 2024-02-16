// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "DOBONG",
});

/* 요청 응답 과정
  1.뷰에서 요청
  2.컨트롤러에서 정보를 받아 모델로 넘겨줌(req.body, req.query, req.params ...)
  3.모델에서 DB로 요청
  4.DB가 데이터 삽입/삭제/조회 등의 결과값을 컨트롤러로 응답
  5.컨트롤러에서 res 객체를 통해 뷰로 응답
  뷰 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰
*/

// TODO: 모델 코드
/* 유저 한명 조회 */
exports.getOneUser = (data, cb) => {
  // console.log(data);
  conn.query(
    `SELECT * FROM user 
  where userid='${data.userid}' and pw='${data.pw}' LIMIT 1`, // LIMIT 1 : 회원가입시 중복체크를 하지 않아서 결과값이 여러 개일 수 있다.
    (err, rows) => {
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
    }
  );
};
/* userid로 유저 한명 조회 */
exports.getOneUserByUserId = (data, cb) => {
  const sql = `SELECT * FROM user 
  WHERE userid='${data.userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("프로필조회 결과", rows);
    if (rows.length > 0) cb(rows[0]);
    else cb(null);
  });
};
/* 유저 정보 수정 */
exports.editUser = (data, cb) => {
  // 바인딩 변수 사용
  const { pw, name, userid } = data;
  const sql = "update user set pw=?, name=? where userid=?";
  conn.query(sql, [pw, name, userid], (err, rows) => {
    if (err) throw err;
    console.log("DB 결과", rows);
    if (rows.changedRows === 1) cb(true);
    else cb(null);
  });
};
/* 유저 정보 삭제 */
exports.deleteUser = (data, cb) => {
  conn.query(
    `DELETE FROM user 
  where id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      if (rows.affectedRows === 1) cb(true);
      else cb(null);
    }
  );
};
/* 
POST /user/signup
유저 정보 등록 
*/
exports.insertUser = (data, cb) => {
  // console.log("model", data);
  const { userid, name, pw } = data;
  const sql = "INSERT INTO user VALUES (null,?,?,?)";
  conn.query(sql, [userid, name, pw], (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    if (rows.affectedRows === 1) cb(true);
    else cb(null);
    // cb();
  });
  // conn.query(
  //   `INSERT INTO user VALUES
  // (null,'${data.userid}','${data.name}','${data.pw}')`,
  //   (err, rows) => {
  //     if (err) throw err;
  //     // console.log(rows);
  //     if (rows.affectedRows === 1) cb(true);
  //     else cb(null);
  //     // cb();
  //   }
  // );
};
