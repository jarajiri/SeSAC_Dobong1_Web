package _05_class.d_inheritance;

public class StudentEx {
    public static void main(String[] args) {

        // Case1. 필드가 public 인 경우
        // Student std1 = new Student("김성민", 30, "도봉");
        // System.out.println(std1.name);
        // System.out.println(std1.age);
        // System.out.println(std1.campus);
        // std1.setCampus("영등포"); // 자식 클래스인 Student의 메서드
        // std1.say(); // 부모 클래스인 Person 에게 상속받은 메서드
        // std1.eat("피자"); // 부모 클래스인 Person 에게 상속받은 메서드

        // Case2. 필드가 private 인 경우됨
        Student std2 = new Student("김성민", 31);
        // private 직접 접근 불가능
        System.out.println(std2.getName());
        System.out.println(std2.getAge());
        System.out.println(std2.getCampus()); // null, 생성자로 초기화 하지 않았음

        std2.setCampus("도봉");
        std2.say();
        std2.eat("치킨");

    }
}
