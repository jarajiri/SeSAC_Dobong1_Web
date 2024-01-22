/* 구조 분해 할당 */
/* 1. 배열의 구조분해 할당 */
const arr = ['tomato','kiwi','banana'];
console.log(arr[2]);
const [to,ki,ba] = arr;
console.log(ki);

const arr2 = ['빨','주','노','초'];
const [red,orange,,green] = arr2;
console.log(red);
console.log(green);

let x='first';
let y='second';
[x,y] = [y,x];
console.log(x,y);

let temp;
let x2='first';
let y2='second';
temp = x2;
x2 = y2;
y2 = temp;

console.log(x2,y2);

/* 2. 객체의 구조분해 할당 */
const obj = {
    title : '제목',
    content : '내용',
    number: 0,
};
console.log(obj.title);

const {title:ti, content, number} = obj;
console.log(number);
console.log(ti);


/* 전개구문(spread) ... */
const arr3 = [1,2,3,4,5];
const arr4 = ['a','b','c'];

console.log(arr3,arr4);

for(let el of arr3){
    console.log(el);
}

console.log(...arr3);

const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log('---------');
console.log(arr5);
console.log(arr6);

const str = "rimeboret";
let strToArr = [...str];
let strToArr2 = str.split('');

console.log(strToArr);
console.log(strToArr2);

//object spread
const me1 = {
    name:'rimeboret',
    height:100,
    friend:null,
    married:false
};

const me2 = {
    name:'eic2021',
    like:[123,123],
    greeting:function(){
        console.log(`hi, my name is ${this.name} and tall is ${this.height}`);
    },
};

let me = {...me1,...me2};
console.log(me);
me.greeting();

/* 실습 spread 연산자 사용하기 */
const word1 = 'abc';
const word2 = 'xyz';
const word3 = [...word1,...word2];
console.log(word3);
const spword1 = word1.split('');
const spword2 = word2.split('');
const spword3 = spword1.concat(spword2);
console.log(spword3);

// rest
const obj2 = {
    title : '제목',
    content : '내용',
    number: 0,
    key4:"value4",
    key5:"value5"
};

console.log("-------------------------------------");

const {title:a, content:b, number:c, ...obj3} = obj2;
console.log(obj3);

function test(...values) {
    const [a,b,...rest] = values
    console.log(values);
    console.log(a);
    console.log(b);
    console.log(rest);
}
test(1,2,3,4,5,6);

console.log("-------------------------------------");
/* quiz */
/* 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber() */
let result = 0;
function addNumber(...numbers) {
    for(nb of numbers){
        result+=nb;
    }
    return result;
}
addNumber(1,2,3,4,5,6,7);
console.log(result);