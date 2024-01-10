/* for문 */
/* 
    for(변수 선언과 초기값 할당; 조건식(어디까지 증가,감소 할건지); 증감식;){
        반복할 코드;
    }
*/
// 1~5까지 출력
for (let index = 0; index < 10; index++) console.log('안녕',index);    
for (let index = 0; index < 10; index+=2) console.log(`안녕하세요 ${index}`);    
for (let index = 0; index < 5; index++) console.log(index+1);

// 감소
for (let index = 5; index > 0; index--) console.log(index);

// 1부터 n까지의 덧셈
let n = 11;
let sum = 0;
for (let i = 1; i <= n; i++) {
    // sum = sum + i;
    sum+=i; 
}
console.log(sum);

/* 배열과 함께 사용하는 for 문 */
let 과일 = ['사과', '망고', '오렌지', '포도'];
console.log(과일.length); //배열의 길이
for (let i = 0; i < 과일.length; i++) {
    console.log(`나는 ${과일[i]}가 좋다`);
    
}
let 숫자배열 = [99,99,98,85,77];
let 합 = 0;
for (let i = 0; i < 숫자배열.length; i++) {
    합+=숫자배열[i];    
}
console.log(합);

/* while */
/* 
    초기화식;
    while(조건식){
        조건이 참일 때 실행할 문장
        증감식;
    }
*/

let m = 1; //초기화
while (m<6) {
    console.log(m);    
    m++;
}
console.log('============');
let o = 10;
while (o>1) {
    console.log(o);
    o--;
}
console.log('============');
// 1~10 짝수만 출력
let even = 1;
while (even<=10) {
    if(even%2==0) console.log(even);
    even++;    
}
console.log('============');
// 10부터 1까지 감소하는데 홀수만 출력
let odd = 11;
while (odd>=3) {
    odd-=2;
    console.log(odd);
}
console.log('============');
// 무한루프 break
let b = 0;
while (true) {
    b++;
    console.log(b);
    if(b===10) break;    
}
console.log('============');
let summ = 0;
for (let i = 0; i < 10; i++) {
    if(i%2==0) continue;
    //짝수일때 반복하지 않고 넘김
    summ += i;
}
console.log(summ);
console.log('============');

// let p = 0;
// while (confirm('계속 진행할까요')) {
//     p++;
//     alert(`${p}번째 alert창`);
// }
// confirm 창 확인버튼 :true return
// confirm 창 취소버튼 :false return

let nn = 10000;
for (let i = 1; i <= nn; i++) {
    if(i%13===0 && i%2===1){
        console.log(i);
    }
}
let nnp = prompt("숫자 입력");
for (let i = 1; i <= Number(nnp); i++) {
    if(i%13===0 && i%2===1){
        console.log(i);
    }
}

for (let i = 2; i < 10; i++) {
    console.log(`---${i}단`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i}x${j}=${i*j}`);        
    }    
}
let k = 0;
let sum100 = 0;
while(k<=100){
    k++;
    if(k%2===0 || k%5===0){
        sum100 += k;
        console.log(k);
    }
}
console.log(sum100);