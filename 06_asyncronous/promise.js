let product;
let price;

function goMart() {
  console.log("마트에 들어간다");
}

function pickDrink() {
  console.log("음료를 고른다");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "제로콜라";
      price = 2000;
      //   resolve("구매완료");
      reject("실패");
    }, 3000);
  });
}

function pay() {
  console.log("계산한다");
  console.log(`상품명:${product}, 가격:${price}`);
}

goMart();
pickDrink()
  .then(() => {
    // console.log(resolve);
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나온다");
  });
