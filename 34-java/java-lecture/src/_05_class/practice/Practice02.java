package _05_class.practice;

public class Practice02 {
    public static void main(String[] args) {
        Student s1 = new Student("김새싹", "20231001", 1);
        Student s2 = new Student("박지은", "20231002", 2);
        Student s3 = new Student("이은지", "20231002", 3);
        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
    }
}
class Student{
    private String name;
    private String student_ID;
    private int grade;
    static int totalStudents;

    public Student(String name, String student_ID, int grade) {
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;
        totalStudents++;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(String student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void displayInfo(){
        System.out.println("==== 학생 정보 ====");
        System.out.println("이름 : "+getName());
        System.out.println("학번 : "+getStudent_ID());
        System.out.println("학년 : "+getGrade());
    }
}
