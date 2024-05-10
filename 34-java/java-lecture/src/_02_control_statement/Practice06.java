package _02_control_statement;
// 메소드 오버로딩 실습
public class Practice06 {
    public static double area(int r){
        return Math.PI * r * r;
    }
    public static double area(int w,int h){
        return w*h;
    }
    public static double area(int a,double b){
        return a*b/2;
    }
    public static void main(String[] args) {
        System.out.println("반지름이 5인 원의 넓이 "+area(5));
        System.out.println("가로 4, 세로 7인 직사각형의 넓이 "+area(4,7));
        System.out.println("밑변 6, 높이 3인 삼각형의 넓이 "+area(6,3.0));
    }
}
