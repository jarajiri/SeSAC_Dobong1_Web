/* 모듈 만들기(commonJS 방식)
exports라는 키워드를 사용해서 내보내기
한번에 내보내기 */

const colors = ['red','blue','green'];
const sayHi = ()=>{
    console.log('hi');
}
function sayName(name) {
    console.log('my name is ',name);
    sayHi();
}
// sayName("성민");
module.exports = {
    colors,
    sayName
}