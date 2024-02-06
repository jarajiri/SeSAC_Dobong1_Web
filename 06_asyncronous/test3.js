let flag = false;

function add(n1, n2) {
  console.log("add function");
  if (flag) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = n1 + n2;
        resolve(result);
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("flag is false");
      }, 2000);
    });
  }
}
add(1, 2)
  .then((result) => console.log(result))
  .catch((msg) => console.log(msg))
  .finally(console.log("이건 무조건 실행"));
