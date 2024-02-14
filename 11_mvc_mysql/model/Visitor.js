// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "rimeboret", comment: "안녕하세요" },
//     { id: 2, name: "홍길동", comment: "안녕하세요" },
//     { id: 3, name: "평경장", comment: "아수라 발발타" },
//     { id: 4, name: "고니", comment: "혼이 담긴 구라" },
//   ];
// };

/* DB연결 */
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "DOBONG",
});
// 전체 데이터 조회
// /GET visitor
exports.getVisitors = (callback) => {
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    /* 쿼리 조회는 시간이 걸리는 작업이므로 콜백함수가 필요 */
    console.log("Visitor.js 전체목록::", rows);
    callback(rows);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitors = (data, callback) => {
  // data={name:'고니',comment:'아수라발발타'}
  //
  conn.query(`INSERT INTO visitor VALUES (null, '${data.name}', '${data.comment}')`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js post", rows);
    /*     OkPacket {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 8,
      serverStatus: 2,
      warningCount: 0,
      message: '',
      protocol41: true,
      changedRows: 0
    } */
    // callback(rows);
    callback(rows.insertId);
  });
};

// 데이터 삭제
// DELETE /visitor
exports.deleteVisitors = (id, callback) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitors.js delete", rows);
    callback(rows);
  });
};

// 데이터 수정
// PATCH /visitor
exports.patchVisitors = (data, callback) => {
  console.log(data);
  conn.query(`UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitors.js delete", rows);
    callback(rows);
  });
};

// 데이터 한개조회
// GET /visitor
exports.getOneVisitor = (id, callback) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitors.js getOne", rows);
    callback(rows[0]); //어차피 한개만 조회되므로 배열안에 값을 직접 전달
  });
};
