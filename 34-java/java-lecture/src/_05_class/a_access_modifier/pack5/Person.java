package _05_class.a_access_modifier.pack5;

public class Person {

    // 1. 필드 : age, name [private]
    private int age;
    private String name;

    // 2. 생성자 : (int age, String name) [public]
    public Person(int age, String name) {
        this.age = age;
        this.name = name;
    }

    // 3. 모든 필드에 대한 getter, setter [public]
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(age<0) this.age = 0;
        else this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

