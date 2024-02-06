class Counter {
  constructor(runEveryFiveTimes) {
    // 콜백함수를 받도록 수정
    this.counter = 0;
    this.callback = runEveryFiveTimes; // callback 변수에 할당
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      //   if (this.callback) {
      //     this.callback(this.counter);
      //   }
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  // 콘솔출력 콜백함수
  console.log(`${num} : hello !`);
}
function alertSomething(num) {
  // 팝업알림 콜백함수
  console.log(`${num} : Hi~`);
}

// const coolCounter = new Counter(); // 콜백함수 전달
const coolCounter = new Counter(alertSomething);

coolCounter.increase(); // 1
coolCounter.increase(); // 2
coolCounter.increase(); // 3
coolCounter.increase(); // 4
coolCounter.increase(); // 5  // 5 : hello !

coolCounter.increase(); // 6
coolCounter.increase(); // 7
coolCounter.increase(); // 8
coolCounter.increase(); // 9
coolCounter.increase(); // 10  // 10 : hello !
