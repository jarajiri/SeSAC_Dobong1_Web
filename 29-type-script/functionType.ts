const prints = (a: number, b: number, c: number): void => {
  console.log(a);
  console.log(b);
  console.log(c);
};

// prints(1, 2, 3);
// prints(1, 2); // error
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(1, 2, 3);
print(1, 2);

function sayHello() {
  console.log("hello");
}
sayHello();

// string return
function concatStr(a: string, b: number): string {
  return a + b;
}
console.log(concatStr("안", 1));

// 원의 넓이를 구하는 함수
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형의 넓이" + triangleArea(3, 5));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const hello: Greet = {
  name: "rime",
  hi() {
    return "안녕하세요 내이름은 " + this.name + "이야";
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다`;
  },
};

console.log(hello.hi());
console.log(hello.bye(5));

// never type
function goingOn(a: number): never {
  while (true) {
    console.log("무한 루프");
    // if(a>10) break; // 특정 조건일때만 빠져나올 수 있음 >> never type을 사용할 수 없음
  }
}
// 화살표 함수
const goingOnArrow = (a: number): never => {
  while (true) {
    console.log("무한 루프");
    // if(a>10) break; // 특정 조건일때만 빠져나올 수 있음 >> never type을 사용할 수 없음
  }
};
// union type
// string|number

// addSomething()
// 매개변수 리터럴이 숫자이면 더하기
// 매개변수 리터럴이 문자이면 이어주기
// const addSomething = (x:string|number,y:string|number):string|number => {
//   return x+y; //컴파일 오류!!
// }

// 오버라이딩?
// 클래스에서 상속을 했을 때, 메소드 재정의

// 오버로딩?
// 함수에서 매개변수의 개수나 타입, 함수의 리턴 타입이 다를 때 사용
// 함수의 이름은 같고 매개변수의 갯수나 타입만 다름

function addSomething(x: number, y: number): number;
function addSomething(x: string, y: string): string;
function addSomething(x: any, y: any): any {
  return x + y;
}

console.log(addSomething(1, 1));
console.log(addSomething("안녕", "하세요"));

//practice1
function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);

//practice2
function sum2(...numbers: Array<number>): number {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}
console.log("sum2===", sum2(1, 2, 3, 4, 10));
