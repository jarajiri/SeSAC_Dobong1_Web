package _01_basic_syntax;

import java.util.Arrays;

public class DataTypes {

    public static void main(String[] args) {
        System.out.println("----------primitive type----------");
//        정수형 변수 선언
        int a = 11;
        long b = 100000000000L; // long 타입은 리터럴값에 L을 붙여야함
        short c = 30000;
        byte d = 127;
//        실수형 변수 선언
        float e = 3.14f;
        double f = 2.777777;
//        문자형 변수 선언
        char ch = 'A';
//        논리형 변수
        boolean bool = true;
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
        System.out.println(f);
        System.out.println(ch);
        System.out.println(bool);

        System.out.println("----------reference type----------");
//        1. primitive에 있는 자료형
//        굳이 필요한 경우가 아니라면 primitive 형 사용
//        Wrapper Class (Integer, Short, Long, Byte, Float, Character 등
//        2. primitive에 없는 자료형
        String greeting = "hello, world"; // 문자열
        int[] numbers = {1,2,3,4,5}; // 배열

        Person person = new Person("김성민",30);
        System.out.println(greeting);
        System.out.println(Arrays.toString(numbers));
        System.out.println(person);
        System.out.println(person.getName());
        System.out.println(person.getage());

        for(int i : numbers){
            System.out.print(i + " ");
        }
    }
}

class Person{
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName(){
        return name;
    };
    public int getage(){
        return age;
    };

}
