/* 모듈 만들기(commonJS 방식)
exports라는 키워드를 사용해서 내보내기
따로따로 내보내기 */

/* 함수 선언문 같은 경우 따로 exports 할 수 없어
표현식 or 화살표 함수를 사용해서 exports 해야한다 */
exports.sayHi2=()=>{
    console.log('hi2');
}
exports.sayHi3=function (name) {
    console.log(name);
}