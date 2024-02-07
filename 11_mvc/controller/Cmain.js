const Comment = require("../model/Comment");
/* 
controller에서는 model에서 받은 데이터를 가공해서
view에 전달할 수 있다.
*/
//  GET /
exports.main = function (req, res) {
  res.render("index");
};

exports.comments = function (req, res) {
  console.log(Comment);
  res.render("comments", {
    commentInfo: Comment.commentsInfo(),
  });
};
exports.comment = function (req, res) {
  console.log(req.params);
  if (!Comment.commentsInfo()[req.params.id - 1]) return res.render("404");
  res.render("comment", {
    commentInfo: Comment.commentsInfo()[req.params.id - 1],
  });
};
