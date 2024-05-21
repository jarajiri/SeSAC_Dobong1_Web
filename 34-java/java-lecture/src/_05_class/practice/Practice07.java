package _05_class.practice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Practice07 {
    public static void main(String[] args) {
        List<ShapeClass> list = new ArrayList<>();
        ShapeClass circleClass = new CircleClass("red","circle",5.0);
        ShapeClass rectangleClass = new RectangleClass("blue","rectangle",5,5);

        list.add(circleClass);
        list.add(rectangleClass);

        for(ShapeClass shapeClass : list){
            System.out.println("===="+shapeClass.getClass().getSimpleName()+"====");
            System.out.println("도형의 색상 : "+shapeClass.getColor());
            System.out.println("도형의 넓이 : "+shapeClass.calculateArea());
        }

    }
}

abstract class ShapeClass {
    private String color;
    private String type;

    public ShapeClass(String color, String type) {
        setColor(color);
        setType(type);
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public abstract double calculateArea();
}

class CircleClass extends ShapeClass {
    private double radius;

    public CircleClass(String color, String type, double radius) {
        super(color, type);
        setRadius(radius);
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return radius * radius * Math.PI;
    }
}
class RectangleClass extends ShapeClass{
    private double width;
    private double height;

    public RectangleClass(String color, String type, double width, double height) {
        super(color, type);
        this.width = width;
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return this.width*this.height;
    }
}