const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}

module.exports = { hashPw, comparePw };
