// 1. string(문자열)
/*
    -텍스트 정보
    -숫자, 특수문자도 따옴표 안에 있으면 문자열
    -따옴표 안에 따옴표가 있다면..?
        "안에 '작은 따옴표'가 있어요"
        '안에 "큰 따옴표"가 있어요'
*/

let myName = '성민';
let number1 = '120';
console.log(myName, number1);

// 2. number(숫자)
/*

*/
let num2 = 128;
let opacity = 0.7;
console.log(num2,opacity);

//NaN(not a number)
console.log('abc'-3);

// 3.boolean
// true/false
let checked = true;
let isShow = false;
console.log(checked,isShow);

// 4.undefined, null(의도적으로 빈 값)
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
let empty = null;
console.log(undef,empty);

// 5. array(배열)
let fruits = ['apple','orange','banana'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let data = [22,'apt',true,null,undefined];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

// 2차원 array
const korean = [
    ["가","나","다"],
    ["라","마","바"],
    ["가가","나나","다다"]
];
console.log(korean[0]);
console.log(korean[0][1]);

const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2]);

// 3차원 array
const nums = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
];
console.log(nums[1][0][1]);

// object {}
// 배열은 순서가 있는 반면, object 는 키-값 형태로 저장
// 데이터에 접근 시 key이름을 이용해서 접근
// {키이름:val1, 키이름2:val2}
let cat = {
    name:'나비',
    age:15,
    isCute: true,
    mew: function () {
        return '냐옹'
    }
}
//점 표기법
console.log(cat.name,cat.age,cat.isCute,cat.mew());
cat.like = 'tuna';
cat.age=3;
console.log(cat);

//대괄호 표기법
let dog = {
    name:'coo',
    age:3,
    isPoodle: true,
    sibilng:['max','lucy']
}
console.log(dog["name"]);
console.log(dog["age"]);
console.log(dog["sibilng"][1]);

let seongmin = {
    name:'김성민',
    age:30,
    isMarried:false,
    gohome: function(){
        return '퇴근'
    }
}
console.log(typeof seongmin.gohome());

// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");
// let mathNumber = Number(mathScore);
// let engNumber = Number(engScore);
// let avg = (mathNumber + engNumber) / 2;
// console.log(mathScore,engScore,mathScore+engScore);
// console.log(avg);

// typeof
// console.log(typeof mathScore, typeof mathNumber, typeof {}, typeof [], typeof NaN ,typeof undefined);

// 형변환
// 1 ? >> string
console.log("-------------------------------");
let str1 = true; //boolean
let str2 = 123; //number
let str3 = null; //null
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

// 2 ? >> number
let n1 = true; //true : 1
let n2 = false; // false : 0
let n3 = 123;
let n4 = '123.4';
console.log(typeof Number(n1), Number(n1));
console.log(typeof Number(n2), Number(n2));
console.log(typeof Number(n3), Number(n3));
console.log(typeof Number(n4), Number(n4));
console.log(parseInt(n4)); // 소수점은 버리고 정수형 변경

// 실습
console.log(typeof 123 + " isn't " + typeof 'abc' + " data type.");
console.log("typeof를 boolean이나 null에 사용하면, " + typeof boolean + "결과를 얻을 수 있습니다.");
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);
console.log(`백틱 사용 ${avgScore}`);