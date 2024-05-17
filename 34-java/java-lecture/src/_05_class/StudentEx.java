package _05_class;

// Student 클래스 사용
public class StudentEx {
    public static void main(String[] args) {
        Student std = new Student("rime",3);
        // System.out.println(std); // toString 오버라이딩 안할시 주소값 찍힘
        System.out.println(std.toString());

        System.out.println(std.name); // 멤버 변수 직접 접근
        System.out.println(std.grade);

        std.goToSchool();
        std.study("Java");
        System.out.println("학생의 나이 : "+std.getGrade());
        System.out.println(std.getTestResult(50));

        System.out.println("==========================");

        Student std2 = new Student("Boret",2);
        System.out.println(std2);

        System.out.println(std2.grade);
        System.out.println(std2.name);
    }
}
