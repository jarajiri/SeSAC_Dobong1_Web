package _05_class;
// 패키지? 여러 클래스를 가지고 있는 디렉토리
// 클래스를 유일하게 만들어주는 식별자

public class Student {
    //     1. 클래스의 필드(변수)
    public String name;
    public int grade;

    //     2. 클래스의 메서드

    //     2-1. 클래스의 생성자
    public Student(String name, int grade) { // 반환값, 매개변수 x
        // Student s1 = new Student("rime",5);
        // 생성자의 인자를 이용해서 클래스의 필드를 초기화할 수 있다.
        this.name = name; // 클래스의 변수 초기화
        this.grade = grade;
    }

    //  2-2. 클래스의 (생성자가 아닌) 메소드
    public void goToSchool() {
        System.out.println("학교에 갑니다.");
    }

    public void study(String subject) { // 반환값 x, 매개변수 o
        System.out.println(subject + " 공부중..");
    }

    public int getGrade() { // 반환값 o, 매개변수 x
        return this.grade;
    }

    public String getTestResult(int score) {
        return this.name + "의 점수는 " + score;
    }

    @Override
    // toString 오버라이딩
    public String toString() {
        // return getClass().getName() + "@" + Integer.toHexString(hashCode());

        return "Student{" +
                "name='" + name + '\'' +
                ", grade=" + grade +
                '}';
    }
}
