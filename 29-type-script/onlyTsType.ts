// Tuple
// 튜플 : 개수와 데이터 타입의 순서가 정해져 있는 배열

let drink: [string, string] = ["a", "b"];
let drink2: [string, string, number];
// let drink3: Array<string & string>;
drink2 = ["cola", "콜라", 1];

console.log(drink2);
console.log(drink2[0]);
console.log(...drink2);

drink2.push("???");
console.log(drink2); //ok

// drink2.push(null); // 안됨
// typescript의 type 추론
/* 
네번째 데이터 타입은 미리 선언되어 있지 않지만,
string, number 로만 이루어진 튜플을 선언했기 때문에
타입스크립트가 자동으로 타입을 추론해서 결정함 (string|number)[]
*/
let drink3: readonly [string, number] = ["cola", 2000];
// drink3[0] = 'cider'; // 수정 불가
// drink3.push('???'); // 수정 불가
let drink4: ReadonlyArray<string | number> = ["string", 2000];

//enum
console.log("enum===============================");
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}
console.log(Auth.admin);
console.log(Auth.user);
console.log(Cafe.americano);
console.log(Cafe.latte);

// Cafe.user=3;
// enum은 선언하고 나면 변경할 수 없다.

enum Cake {
  choco, //0
  vanilla, //1
  strawberry, //2
  kiwi = "kiwi",
}
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);

// 실습
let olimpic_newgame1: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame1[1]=false;

let olimpic_newgame2: ReadonlyArray<object | boolean> = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame2[1]=false;
