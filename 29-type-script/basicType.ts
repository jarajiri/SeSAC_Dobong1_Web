let number: number = 1;
console.log(number);
// number = "string"; //string 타입 number타입으로 할당될 수 없음

/* 기본 타입 */
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

/* Object */
let numArr: number[] = [1, 2, 3, 4, 5];
let stringArr: Array<string> = ["a", "b", "c", "d", "e"];

// number or string 타입이 올 수 있는 배열
const arr1: (number | string)[] = [1, 2, 3, "a", "c", "d"];

// boolean, null, number 가 올 수 있는 배열 arr2
const arr2: (boolean | null | number)[] = [true, null, 1, 2, 3];
const arr3: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];

// 어떤 자료형이든지 상관없는 배열
const arr4: Array<any> = [1, 2, "a", "b", true, null, undefined, [], {}];

// object
let obj1: object = {
  name: "rimeboret",
  age: 11,
};
