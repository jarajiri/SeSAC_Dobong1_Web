interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "rime",
  isPassed: true,
};

type SCORE = "A+" | "A" | "B+" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  //name,isPassed를 상속받아옴
  position: string;
  height: number;
  weight: number;
  readonly backNumber?: number; //필수값이 아님: ? 처리
  [grade: number]: SCORE; // 키(grade)값이 여러개 올 수 있다 [1,2,3]
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  position: "pitcher",
  height: 193,
  weight: 95.3,
  backNumber: 17,
  1: "A+",
};
console.log(otani);
// otani.backNumber = 10;
otani.isPassed = false;
console.log(otani);

otani["2"] = "B+";
console.log(otani);

const junghoo: 야구부 = {
  name: "이정후",
  isPassed: true,
  position: "hitter",
  height: 185,
  weight: 95.3,
};
console.log(junghoo);

// interface - 함수의 타입 설정
interface Calc {
  (a: number, b: number): number;
}
// Calc
const sum: Calc = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(1, 2));

//
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차 인터페이스 : 모든 타입을 만족해야 함
const toyCar: Toy & Car = {
  name: "타요",
  start() {
    console.log(`${this.name}의 가격은 ${this.price}입니다.`);
  },
  color: "blue",
  price: 50000,
};
toyCar.start();

// type
type gender = "Female" | "Male";

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: gender; // type으로 지정
};

let daniel: Person2 = {
  name: "다니엘",
  gender: "Female",
  age: 20,
};

// daniel.gender = "여성";
// daniel.gender = "female";
