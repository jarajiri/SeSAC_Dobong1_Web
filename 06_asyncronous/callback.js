let product;
let price;

function goMart() {
  console.log("마트에 들어간다");
}

function pickDrink(callback) {
  console.log("음료를 고른다");
  setTimeout(() => {
    console.log("고민 끝");
    product = "제로콜라";
    price = 2000;
    callback();
  }, 3000);
}

function pay() {
  console.log("계산한다");
  console.log(`상품명:${product}, 가격:${price}`);
}

goMart();
pickDrink(pay);
// pay();
