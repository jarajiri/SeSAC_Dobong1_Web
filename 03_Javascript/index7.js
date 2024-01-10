 /* 문자열에서 사용 가능한 속성/메소드 */
 /* 
    -length
    -toUpperCase, trim, indexOf
    -slice, replace, replaceAll, repeat, split 
 */
  
 let str1 = "Strawbery Moon";
 let str2 = "    Strawbery Moon  ";

 /* 문자열 인덱싱 */
 console.log(str1[5]);

 console.log(`str1의 문자열 길이 = ${str1.length}`);
 console.log(`str2의 문자열 길이 = ${str2.length}`);

 let msg = "Happy Birthday~";
 let userId = "    user123  ";

 console.log(msg.toLowerCase());
 console.log(msg.toUpperCase());
 console.log(userId.trim().length);

 let mango = "applemango";
 // indexOf
 console.log(mango.indexOf("apple")); //0
 console.log(mango.indexOf("mango")); //5
 console.log(mango.indexOf("e")); //4
 // 문자열에 포함되지 않은 문자열이 매개변수로 들어가면 -1 반환
 console.log(mango.indexOf("x")); //-1
 console.log(mango.indexOf("p",2)); //(두번째 p의 인덱스 값) 2

 // slice
 console.log(mango.slice(5)); //mango
 console.log(mango.slice(3,6)); //lem
 console.log(mango.slice(-1)); //o
 console.log(mango.slice(-4)); //ango


 let msg2 = "집에 가고 싶다다";
 console.log(msg2.replace("집에","home에"));
 console.log(msg2.replaceAll("다","냐"));

 let date = "2024.1.10"
 date = date.replaceAll(".","-")
 console.log(date);

 console.log("집".repeat(10));

 console.log(date.split('-'));
 console.log(date.split(''));

//  let fruits = ["사과","바나나","수박","포도","파인애플"];
//  fruits.forEach((f,i,fruits)=> console.log(f,i,fruits));

// 배열 관련 메소드
/* 
 - length(속성)
 - push, pop, unshift, shift, indexOf, join, reverse
 - includes, map, forEach, find, filter
 - for ~ of (함수 아님)
*/
console.log('--------------');
let arr1 = [1,2,3,4,5];
let arr2 = ["quakka","puppy","rabbit","hamster"];

arr1[5] = 6;
console.log(arr1);

arr1 = [1,2,3,4,5];
arr1.push(6);
arr1.pop();
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);

/* includes(a) a에 배열의 요소가 들어감 
 - 매개변수로 들어간 요소가 배열에 있으면 true / false
*/
console.log(arr2.includes("cat"));
console.log(arr2.includes("puppy"));
console.log(arr1.includes(4));

/* indexOf = 문자열의 indexOf와 동일
 몇번 인덱스인지 확인 후 인덱스 값 반환
*/
console.log(arr2.indexOf('rabbit'));

/* reverse - 배열의 순서를 뒤집어짐
 실제 배열이 변경
*/
arr1.reverse();
console.log(arr1);

/* join - 문자열의 split 메소드와 반대
 배열을 문자열로 변경
*/

//let str1 = "Strawbery Moon";
str1 = str1.split('');
str1 = str1.join('.');
console.log(str1);


/* 반복문 - for of & forEach */
let arr3 = [11,22,33,44,55];
let alph = ['a','b','c','d','e','f'];
//for
console.log("for 문");
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);    
}
//for of
console.log("for of 문");
for(let a of arr3){
    console.log(a);
}
//forEach
/* 
    배열.forEach(function(element[,index,array]){
        반복될 코드
    });

*/
console.log("forEach 문");
arr3.forEach(function (element,index,array) {
    console.log(element,index, array);
})
arr3.forEach((e)=>console.log(e));

// let arr2 = ["quakka","puppy","rabbit","hamster"];
// filter
// return 이후 조건을 만족하는 요소들을 모아서 "배열"로 반환
// 1. 함수 표현식
let six = arr2.filter(function (e) {
    return e.length === 6;
})
console.log(six);

// 2. 화살표 함수 & return o
let six2 = arr2.filter((e)=> {
    return e.length === 6;
})

console.log(six2);
// 3. 화살표 함수 & return x, {} x
let six3 = arr2.filter((e) => e.length === 6);
console.log(six3);

// map
// 배열 내의 모든 요소에 대해 함수 호출한 결과를 모아서 "배열"로 반환
let arr4 = [1,2,3,4,5];
let multiArr = arr4.map((e)=>e*3);
console.log(multiArr);

// find
// 배열에서 특정 조건을 만족하는 첫번째 "요소" 반환
let findResult = multiArr.find(function (e) {
    return e>10;
})
console.log(findResult);



let array = [];
for (let i = 0; i < 100; i++) {
    array[i] = i+1;    
}
let sumFor = 0;
let sumForOf = 0;
let sumForEach = 0;

for (let i = 0; i < array.length; i++) {
    sumFor += i;    
}
console.log(sumFor);

for(let e of array){
    console.log(e);
    sumForOf += e;
}
console.log(sumForOf);

array.forEach((e)=>sumForEach+=e);
console.log(sumForEach);

