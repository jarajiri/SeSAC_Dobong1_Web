package _05_class.practice;

public class Practice04 {
    public static void main(String[] args) {
        Dog dog = new Dog("개", "멍뭉이", 5);
        dog.makeSound();
        Cat cat = new Cat("고양이","야옹이",2);
        cat.makeSound();
    }

}
class Animal{
    private String species;
    private String name;
    private int age;

    public Animal(String species, String name, int age) {
        this.species = species;
        this.name = name;
        this.age = age;
    }

    public void makeSound(){
        System.out.println("동물은 소리를 낸다.");
    }
}
class Cat extends Animal{
    public Cat(String species, String name, int age) {
        super(species, name, age);
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("야옹");
    }
}
class Dog extends Animal{
    public Dog(String species, String name, int age) {
        super(species, name, age);
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("멍멍");
    }
}