package _05_class.d_inheritance;

public class Student extends Person {

    // Case1. 필드가 public 인 경우
    // public String campus; // Student의 고유 필드
    // public Student(String name, int age, String campus){

    // 1-1. 부모 클래스가 기본 생성자(생성자에서 매개변수를 받아주지 않는)를 가지는 경우
    // super(); // Person 생성자 실행! (부모 생성자의 매개변수가 없을 때에는 생략 가능)
    // this.age=age;
    // this.name=name;
    // this.campus = campus;
    // System.out.println("자식 클래스 Student() 생성자 실행!");

    // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
    // super(name,age); // Person 생성자 실행! (생략 불가능)
    // this.campus = campus;
    // System.out.println("자식 클래스 Student() 생성자 실행!");
    // }

    // Case2. 필드가 private 인 경우
    private String campus;
    public Student(String name, int age) {
        // // super(); // 생략 가능
        // // setter를 이용해 초기화
        // setName(name);
        // setAge(age);

        // super 내부에 setAge와 setName이 초기화 하지 않아도 됨
        super(name,age);

    }

    public String getCampus(){
        return this.campus;
    }
    public void setCampus(String campus) {
        this.campus = campus;
        System.out.println(campus + " 캠퍼스에서 공부중입니다.");
    }

}
