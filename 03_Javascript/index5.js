/* 1. if문 */
/* if(조건식) {조건이 참일때 실행할 문장} */
if(true) console.log("참");

// let number = prompt("숫자 입력");

/* if ~ else */
// if(Number(number)>10) console.log('숫자가 10보다 큼');
// else alert('10보다 작거나 같음');

let number = 88;
/* if ~ else if ~ else */
if(number > 10) console.log('10보다 큼');
else if(number === 10) console.log('10임');
else console.log('10보다 작음');

/* 실습 */
let age = 0;
if(age >= 20) console.log("성인");
else if(age >= 17) console.log("고등학생");
else if(age >= 14) console.log("중학생");
else if(age >= 8 ) console.log("초등학생");
else console.log("유아");

let result= (age >= 20) ? "성인"
            : (age >= 17) ? "고등학생" : "유아"
console.log(result); 

/* switch~case 문 
    -switch의 괄호안과 case의 조건에는 비교식이 들어가지 않음
     값 자체가 들어간다.
    -자바스크립트에선 조건이 많을 때 switch를 쓰는게 근소하게 성능에 유리함
*/
let a = 1;
switch (a) {
    case 3:
        a = "3입니다";
        break;
    case 4:
        a = "4입니다";
        break;
    case 5:
        a = "5입니다";
        break;
    default:
        a = "어떤값인지 모르겠음"
        break;
}
/* break가 없을시 break가 있는 곳까지 실행된다(스코프{}에서 빠져나가지 못함) */
console.log(a);

let score = 101;
// if(score===100 && score >=90) console.log('A');
// else if(score<90 && score >=80) console.log('B');
// else if(score<80 && score >=70) console.log('C');
// else if(score<70 && score >=60) console.log('D');
// else if(score<60) console.log('F');
// else console.log('잘못된 점수입니다');

// switch로 성적 판별
switch (parseInt(score/10)) {
    case 10:
        console.log('A+');
        break;
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    case 5:
        console.log('F');
        break;
}

/* 3. 삼항연산자
    조건식 ? 조건식이 true일때 : false 일때
 */

let num = 5;
if(num%2 === 1) console.log("홀수");
else console.log("짝수");
num%2 === 1 ? console.log('홀수') : console.log('짝수');

let now = new Date().getHours();
now > 12 ? console.log('오후') : console.log('오전');

console.log("-----------------");

