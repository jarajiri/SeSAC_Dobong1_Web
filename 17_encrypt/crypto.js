const { log } = require("console");
const crypto = require("crypto"); // node.js 내장 모듈, 설치 x
/* 
1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
    -createHash(알고리즘)
    -pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1 createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
// 인코딩 방식 base64, hex, ascii, binary 등을 사용 할 수 있음

//비밀번호를 받아서 암호화 하는 함수
const createHashPassword = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

// console.log("1st Hashing::::", createHashPassword("1234"));
// console.log("2nd Hashing::::", createHashPassword("1234"));
// console.log("3rd Hashing::::", createHashPassword("1234"));
// console.log("another val Hashing::::", createHashPassword("1234."));

// 1-2 pdkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘).toString(인코딩방식)
/* 
    -솔트를 이용해서 해싱하는 함수
    -salt 생성 : crypto.randomBytes(바이트 수)
    -randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴하므로 toString으로 변환해야 확인 가능
*/

const str = "hello";

const buffer = Buffer.from(str);
// console.log("buffer::::", buffer); // 100 001 010 형태의 이진데이터가 콘솔에 16진수로 표현

// 회원 가입 과정
// 새로운 해쉬와 salt를 만드는 과정
function saltAndHashPassword(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; // 반복횟수
  const keylan = 64; // 키 길이
  const alg = "sha512";
  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylan, alg) // buffer
    .toString("base64"); // String
  return { hash, salt };
}

// console.log("1st Hashing::::", saltAndHashPassword("1234"));
// console.log("2nd Hashing::::", saltAndHashPassword("1234"));
// console.log("3rd Hashing::::", saltAndHashPassword("1234"));
// salt 값이 랜덤이므로 다른 결과가 나옴

// 로그인 과정
// 데이터베이스에 있는 해쉬와 salt를 이용해서
// 입력받은 값과 비교
function checkPassword(inputPw, savedSalt, savedHash) {
  // saltAndPassword() 와 횟수, 길이, 알고리즘이 같아야 함
  const iterations = 100; // 반복횟수
  const keylan = 64; // 키 길이
  const alg = "sha512";
  // inputPw 해싱
  const hash = crypto.pbkdf2Sync(inputPw, savedSalt, iterations, keylan, alg).toString("base64");
  return savedHash === hash;
}

const registerPassword = "qwer1234";
// 회원가입
const { hash: registerHash, salt: registerSalt } = saltAndHashPassword(registerPassword);
console.log("암호화에 쓰인 salt::::", registerSalt);
console.log("암호화된 hash::::", registerHash);

// 로그인 : 비밀번호가 db의 hash값과 일치하는지 확인
const isMatch1 = checkPassword("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPassword("abcd1234", registerSalt, registerHash);
console.log("비밀번호 일치::::", isMatch1);
console.log("비밀번호 일치::::", isMatch2);

/* 2. 양방향 암호화: 복호화 가능 */
// createCipheriv()
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = "aes-256-cbc";
const originalMessage = "hello, world";

console.log("************ 양방향 암호화 *****************8");
//암호화
function encrypt(text) {
  // 1. 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  // 2. 실제 데이터 암호화 작업
  //   let encrypted = cipher.update(암호화할데이터, 입력인코딩, 출력인코딩);
  let encrypted = cipher.update(text, "utf-8", "base64");

  // 3. final을 이용해서 최종 결과 생성
  encrypted += cipher.final("base64");
  return encrypted;
}

console.log(encrypt(originalMessage));

//복호화
function descrypto(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 암호화 할때 사용한 값들과 같아야 함
  // 2. 실제 데이터 복호화
  // base64로 인코딩된 문자열이 utf8로 복호화된다.
  let decrypted = decipher.update(encryptedText, "base64", "utf8");
  // 3. final을 이용해서 최종 결과 생성
  decrypted += decipher.final("utf8");
  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화 됨::::", encryptedMessage);

const decryptedMessage = descrypto(encryptedMessage);
console.log("복호화 됨::::", decryptedMessage);
