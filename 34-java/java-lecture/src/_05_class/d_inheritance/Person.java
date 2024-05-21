package _05_class.d_inheritance;

// 01_ 부모 클래스의 정의
// 상속
// - java 에서는 다중 상속 지원하지 않음!
public class Person {

    // Case1. 필드가 public 인 경우
    // public String name;
    // public int age;

    // 1-1. 부모 클래스가 기본 생성자(생성자에서 매개변수를 받아주지 않는)를 가지는 경우
    // public Person(){
    //     System.out.println("부모 클래스 Person() 생성자 실행!");
    // }

    // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
    // public Person(String name, int age) {
    //     this.name = name;
    //     this.age = age;
    //     System.out.println("부모클래스 Person(String name, int age) 생성자 실행!");
    // }


    // public void say() {
    //     System.out.println("안녕하세요");
    // }
    //
    // public void eat(String food) {
    //     System.out.println(food + "를 먹고있어요");
    // }

    // Case2. 필드가 private 인 경우
    private String name;
    private int age;
    // TODO : Person 클래스에서 매개변수를 받아서 name, age 초기화
    // TODO : Student 생성자 내부 변경해보기
    public Person(String name,int age){
        setName(name); // setter 함수에 특정 조건문이 있을경우(나이의 음수값 예외처리 등) this 보단 setter 사용
        setAge(age);
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return this.age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public void say() {
        System.out.println("안녕하세요");
    }

    public void eat(String food) {
        System.out.println(food + "를 먹고있어요");
    }
}
