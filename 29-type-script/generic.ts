const printSome = <T>(x: T, y: T): T => {
  console.log(x);
  console.log(y);
  return y;
};
printSome<number>(1, 2);
printSome<string>("hi", "hello");

const printSome2 = <T, K>(x: T, y: K): void => {
  console.log(x);
  console.log(y);
};
printSome2<number, string>(1, "안녕하세요");

const arrLength1 = (arr: any[]): number => {
  return arr.length;
};
const getValue1 = (value: string): string => {
  return value;
};

const arrLength2 = <T>(arr: T[]): number => {
  return arr.length;
};
console.log(arrLength2<number>([1, 2, 3]));

const getValue2 = <T>(value: T): T => {
  return value;
};
console.log(getValue2<string>("abc"));

//practice
const arrElement = <T>(arr: T[], idx: number): T | boolean => {
  if (idx >= arr.length || idx < 0) return false;
  return arr[idx];
};
console.log(arrElement<string>(["a"], 0));

// interface and generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}
// T타입으로 string을 사용
const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-23"),
  option: "black",
};
// T타입으로 객체타입 적용
type iphoneOption = {
  color: string;
  storage: number;
};
const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

let aa = 1;
let bb = "string";
let cc = true;

//타입 추론
//타입스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
// aa="1"; //error
