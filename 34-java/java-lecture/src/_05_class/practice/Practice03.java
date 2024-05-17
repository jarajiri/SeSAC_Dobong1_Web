package _05_class.practice;

import java.util.Scanner;

public class Practice03 {

    public static void main(String[] args) {
        System.out.print("원의 반지름을 입력하세요 :");
        Scanner sc = new Scanner(System.in);
        Circle circle = new Circle(sc.nextInt());
        System.out.println("원의 반지름 : "+circle.getRadius());
        System.out.println("원의 넓이 : "+circle.calculateArea());

    }
}
class Circle{
    private final int radius;
    final static double PI = Math.PI;
    Circle(int radius) {
        this.radius = radius;
    }

    public int getRadius() {
        return radius;
    }

    public double calculateArea(){
        return radius*radius*PI;
    }
}