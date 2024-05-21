package _05_class.practice;

public class Practice06 {
    public static void main(String[] args) {
        System.out.println("==== 김철수 학생의 정보 ====");
        Kim kim = new Kim("김철수", "ABC 고등학교", "20220001", 17);
        System.out.println(kim);
        kim.todo();
        System.out.println("==== 백영희 학생의 정보 ====");
        Baek baek = new Baek("백영희", "XYZ 고등학교", "20220002", 18);
        System.out.println(baek);
        baek.todo();
    }
}

abstract class StudentClass {
    String name;
    String school;
    String studentId;
    int age;

    public StudentClass(String name, String school, String studentId, int age) {
        this.name = name;
        this.school = school;
        this.studentId = studentId;
        this.age = age;
    }

    abstract void todo();
}

class Kim extends StudentClass {
    public Kim(String name, String school, String studentId, int age) {
        super(name, school, studentId, age);
    }

    @Override
    void todo() {
        System.out.println("점심은 김가네 김밥");
    }

    @Override
    public String toString() {
        return "학교 : " + school + "\n" +
                "나이 : " + age + "\n" +
                "학번 : " + studentId;
    }
}

class Baek extends StudentClass {
    public Baek(String name, String school, String studentId, int age) {
        super(name, school, studentId, age);
    }

    @Override
    void todo() {
        System.out.println("점심은 백종원 피자");
    }

    @Override
    public String toString() {
        return "학교 : " + school + "\n" +
                "나이 : " + age + "\n" +
                "학번 : " + studentId;
    }
}