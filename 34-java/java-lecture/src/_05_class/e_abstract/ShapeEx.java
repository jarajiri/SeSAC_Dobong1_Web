package _05_class.e_abstract;

public class ShapeEx {
    public static void main(String[] args) {
        Circle circle = new Circle("blue");
        circle.start();
        circle.draw();
        System.out.println(circle.getColor());

        System.out.println("========================");

        Square square = new Square("black","정사각형");
        square.start();
        square.draw();
        System.out.println(square.getColor());
        square.showType();
    }
}
