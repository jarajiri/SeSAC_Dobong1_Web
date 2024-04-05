enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Week.Sun); // 0
console.log(Week["Sun"]); // 0
console.log(Week[0]); // 'Sun'

let weekName: string = Week[5];
console.log(weekName); // 값이 5인 금요일이 출력 -> Fri

enum Priority {
  High = "high",
  Medium = "medium",
  Low = "low",
}

let abc: string = Priority.High;

// 어떤 Enum에 특정 value가 있는지 검사해주는 함수
export function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter((key) => isNaN(Number(key)))
    .some((key) => enumObject[key] === value);
}
/* 
 함수 실행 순서 :
 Object.keys(enumObject) 하면 -> [ '0', '1', '2', 'High', 'Medium', 'Low' ] 로 변환됨
 .filter((key) => isNaN(Number(key))) -> 여기서 숫자문자 요소를 제거해주고
 .some((key) => enumObject[key] === value); -> 여기서 인수값을 받은 두번째 매개변수와 비교해서 enum에 값이 있는지 없는지 검사해줌
 */

const result = getIsValidEnumValue(Priority, Priority.High);
console.log("result: ", result); // true

const result2 = getIsValidEnumValue(Priority, 1);
console.log("result: ", result2); // true
