/* Class: 오브젝트를 만들 수 있는 틀 */
/* 
속성
    - 만들어진 연도 : year
    - 집의 이름 : name
    - 창문의 갯수 : window
메소드
    - 건물의 나이 출력 getAge()
    - 창문의 개수 출력 getWindow()
 */

class House {
    constructor(year,name,window){
        this.name = name;
        this.year = year;
        this.window = window;
    }
    //메소드
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 됐습니다`);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
    }
}

// const h1 = {
//     name:'old',
//     year:1789,
//     window:5
// }

const house1 = new House(1789,"old",5);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015,"반포자이",10);
house2.getAge();
house2.getWindow();
console.log(house2.name);


/* 상속 */
//extends 키워드를 사용해서 상속
//house 클래스의 함수의 속성을 사용할 수 있음
class Apt extends House{
    constructor(year,name,window,floor,windowMaker){
        super(year,name,window);
        this.floor=floor;
        this.windowMaker=windowMaker;
    }
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }

    //over riding
    //부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
    //내용은 다르게 만들고 싶을 때, 메소드 재선언
    getWindow(){
        return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고 ${this.window} 개 입니다`
    }

    //getAge() << 상속받아서 사용 가능
}
console.log("---------------------------------------");
const apt1 = new Apt(2000,'아이파크',5,12,'금호');
console.log(apt1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log(apt1.getAptInfo()); // 새로운 메소드 정의
apt1.getAge(); // 상속받은 메소드
console.log(apt1); 

/* 실습 */
class Shape{
    constructor(ver,hor){
        this.ver = ver;
        this.hor = hor;
    }
    getArea(){
        return this.ver*this.hor;
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape{
    constructor(ver,hor){
        super(ver,hor)
    }
    getArea(){
        return this.ver*this.hor;
    }
    getDiagonal(){
        return Math.sqrt(Math.pow(this.ver,2)+Math.pow(this.hor,2));
    }
}

let rec2 = new Rectangle(3,4);
console.log(rec2.getDiagonal());

class Triangle extends Shape{
    constructor(ver,hor){
        super(ver,hor)
    }
    getArea(){
        return this.ver*this.hor/2;
    }
}

let rec3 = new Rectangle(3,4);

class Circle extends Shape{
    constructor(ver,hor,radius){
        super(ver,hor);
        this.radius = radius;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI
    }
}
let tri1 = new Triangle(3,4,5);
console.log(tri1.getArea());