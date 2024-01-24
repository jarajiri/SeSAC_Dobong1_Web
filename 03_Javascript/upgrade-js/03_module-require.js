// 모듈을 불러서 사용
// 가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올 수 있음
const {sayName} = require('./03_exports1.js'); // 구조분해 할당으로 하나만 불러오기
const export1 = require('./03_exports1.js'); // 전체를 불러오기
// sayName("rime");
console.log(export1); // 객체로 불러옴
export1.sayName("rime");

//따로 불러오기
const {sayHi2, sayHi3} = require('./03_exports2');
sayHi2();
sayHi3("안녕하세요");