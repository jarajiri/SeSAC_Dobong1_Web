/* Date 객체 */
// 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 값으로 초기화 가능
let now = new Date();
console.log(now);
console.log(new Date('September 30, 2000 13:00:00'));
console.log(now.getFullYear(),'년');
console.log(now.getMonth(),'월'); // 월 0~11
console.log(now.getDate()); // 몇일
console.log(now.getDay()); // 0~6

/* Math 객체 */
console.log(Math.PI); // 파이
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트 2

/* 메소드 */
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.ceil(5.1555)); // 올림
console.log(Math.floor(-5.1555)); // 내림
console.log(Math.round(5.551)); // 반올림
console.log(parseInt(Math.random()*10)); // 난수생성 0<x<1

// object 관련 객체
const areaNum = {
    Seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052'
}
// 각각 key와 value를 뽑아서 배열로 변환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);
console.log(area,number);

console.log('--------');
/* 실습 1 */
let array = [];
for (let i = 0; i < 100; i++) {
    array[i] = i+1;    
}

let sumFor = 0;
let sumForOf = 0;
let sumForEach = 0;

for (let i = 0; i < array.length+1; i++) {
    sumFor += i;
}
console.log(sumFor);

for(let e of array){
    sumForOf += e;
}
console.log(sumForOf);

array.forEach((e)=>sumForEach+=e);
console.log(sumForEach);

/* 실습 2 */
let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"]
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"]

let same = fruits1.filter(function(e){
    return fruits2.includes(e)
})
console.log(same);

let diff = fruits1.filter(function(e){
    return !fruits2.includes(e)
})
console.log(diff);

/* 실습 3 */
let nowDay = new Date();
console.log(nowDay.getDay());
(nowDay.getDay() === 0 || nowDay.getDay() === 6) ? console.log("주말입니다") : console.log("평일입니다");

/* 실습 4 */
let ranNum = parseInt(Math.random()*10)+1;
console.log(ranNum);
