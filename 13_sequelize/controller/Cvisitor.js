const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // DB 연결전 임시 데이터베이스
  //   console.log(Visitor.getVisitors()); // 배열형태
  //   res.render("visitor", {
  //     userInfo: Visitor.getVisitors(),
  //   });
  /* DB 연결 후 */
  // Visitor.getVisitors((result) => {
  //   console.log("Cvisitor.js 전체목록::", result);
  //   res.render("visitor", { userInfo: result });
  // });
  /* sequelize 연결 후 */
  models.Visitor.findAll().then((result) => {
    console.log("findAll >>", result);
    res.render("visitor", { userInfo: result });
  });
};

exports.getOneVisitor = (req, res) => {
  // console.log(req.params);
  // console.log(req.params.id);
  // Visitor.getOneVisitor(req.params.id, (result) => {
  //   console.log("Cvisitor.js getOne", result);
  //   res.send(result);
  // });
  /* sequelize 연결 후 */
  models.Visitor.findOne({
    where: { id: req.params.id },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

exports.postVisitors = (req, res) => {
  // console.log(req.body);
  // Visitor.postVisitors(req.body, (result) => {
  //   console.log("Cvisitor.js post", result);
  //   // res.send(result + " 등록완료");
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });
  /* sequelize 연결 후 */
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
    id: req.body.id,
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

exports.deleteVisitors = (req, res) => {
  // console.log(req.body);
  // console.log(req.body.id);
  // Visitor.deleteVisitors(req.body.id, (result) => {
  //   console.log("Cvisitor.js delete", result);
  //   res.send("몇 번 방명록 삭제 완료!");
  // });
  /* sequelize 적용 후 */
  console.log(req.body);
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("sequelize destroy result", result); // 1(true),0(false)
    res.send("번 방명록 삭제 완료");
  });
};

exports.patchVisitors = (req, res) => {
  // console.log(req.body);
  // Visitor.patchVisitors(req.body, (result) => {
  //   console.log("Cvisitor.js patch", result);
  //   res.send("수정 완료");
  // });
  /* sequelize 적용 후 */
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("sequelize update result", result); // 1(true),0(false)
    res.send(req.body.id + "수정 완료");
  });
};
