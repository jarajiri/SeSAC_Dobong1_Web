// npm install bcrypt
const bcrypt = require("bcrypt"); // 강력한 암호화 모듈
// 해쉬 함수 반복 횟수 >>> 반복하는 횟수가 많을수록 안전함
const saltRounds = 10;

// 1.회원 가입(해시값 생성)
function hashPw(pw) {
  // hashSync(비밀번호, 솔트라운드), 리턴값은 암호화된 문자(string)
  return bcrypt.hashSync(pw, saltRounds);
}

// 2.로그인(해시값 일치 확인)
function comparePw(inputPw, hashedPw) {
  // compareSync(원본비밀번호, 해시된 비밀번호)
  return bcrypt.compareSync(inputPw, hashedPw); // 리턴값 true / false
}

// 해시값 생성 테스트
const originalPasword = "12345";
const hashedPw = hashPw(originalPasword);
console.log("암호화된 비밀번호::::", hashedPw);

// 해시값 비교 테스트
const isMatch1 = comparePw(originalPasword, hashedPw);
const isMatch2 = comparePw("1234", hashedPw);
console.log("비밀번호 일치::::", isMatch1);
console.log("비밀번호 일치::::", isMatch2);
