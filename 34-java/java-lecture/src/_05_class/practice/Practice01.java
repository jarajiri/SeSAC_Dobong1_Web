package _05_class.practice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Practice01 {
    public static void main(String[] args) {
        ArrayList<Rectangle> arrayList = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        int width, height;
        while(true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            width = sc.nextInt();
            height = sc.nextInt();
            if(width == 0 && height ==0)break;
            Rectangle square = new Rectangle(width);
            square.setHeight(height);
            arrayList.add(square);
        }
        for(Rectangle rec : arrayList){
            rec.recInfo();
        }
        System.out.println("Rectangle 인스턴스의 개수는 : "+arrayList.size());
    }

}
class Rectangle{
    private int width;
    private int height;

    public Rectangle(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getArea(){
        return width*height;
    }

    public void recInfo(){
        System.out.println("가로의 길이는 : "+getWidth());
        System.out.println("세로의 길이는 : "+getHeight());
        System.out.println("넓이는 : "+getArea());
        System.out.println("----------------------------");
    }

}
