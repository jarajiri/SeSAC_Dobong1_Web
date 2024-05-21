package _05_class.d_inheritance;

public class DogEx {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sayHello(); // Animal 클래스 메서드
        dog.fetch(); // Dog 클래스 메서드
        dog.makeSound("멍멍"); // 오버라이딩한 메서드

        Animal cat = new Animal();
        cat.makeSound("야옹");
    }
}
