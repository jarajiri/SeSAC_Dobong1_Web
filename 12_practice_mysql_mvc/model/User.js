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
  // console.log(data);
  conn.query(
    `SELECT * FROM user 
  where userid='${data.userid}' and pw='${data.pw}'`,
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
exports.getOneUserByUserId = (data, cb) => {
  conn.query(
    `SELECT * FROM user 
  WHERE userid='${data.userid}'`,
    (err, rows) => {
      if (err) throw err;
      console.log("프로필조회 결과", rows);
      if (rows.length > 0) cb(rows[0]);
      else cb(null);
    }
  );
};
exports.editUser = (data, cb) => {
  conn.query(
    `UPDATE user 
  SET pw='${data.pw}', name='${data.name}' 
  where userid='${data.userid}'`,
    (err, rows) => {
      if (err) throw err;
      console.log("DB 결과", rows);
      if (rows.changedRows === 1) cb(true);
      else cb(null);
    }
  );
};
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

exports.insertUser = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUES 
  (null,'${data.userid}','${data.name}','${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      if (rows.affectedRows === 1) cb(true);
      else cb(null);
    }
  );
};
