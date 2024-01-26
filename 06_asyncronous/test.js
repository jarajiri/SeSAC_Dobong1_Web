function callPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// 1. promise then으로 실행
callPromise("allie") // callPromise 의 결과가
  .then((name) => {
    console.log(name + "반가워");
    // 리턴의 결과가 다음 then의 parameter로 들어감
    return backPromise();
  })
  .then((txt) => {
    console.log(txt + "를 실행했구나");
    return hellPromise();
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  });

// 2. async await 로 실행
async function asyncF() {
  //resolve혹은 reject의 결과가 반환되어 변수에 저장됨
  let name = await callPromise("allie");
  console.log(name + "반가워");
  let back = await backPromise();
  console.log(back + "을 실행했구나");
  let hell = await hellPromise();
  console.log("여기는" + hell);
}

// asyncF(); //함수 호출!!
