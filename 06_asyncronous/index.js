/* setTimeOut(()=>{},시간초) */
/* 
    시간 단위는 ms
    설정한 시간 이후에 함수 내부에 있는 코드가 동작
*/

// setTimeout(() => {
//   console.log("setTimeOut 사용해보기");
// }, 3000);
let product;
let price;

function goMart() {
  console.log("마트에 들어간다");
}

function pickDrink() {
  console.log("음료를 고른다");
  setTimeout(() => {
    console.log("고민 끝");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}

function pay() {
  console.log("계산한다");
  console.log(`상품명:${product}, 가격:${price}`);
}

goMart();
pickDrink();
pay();
