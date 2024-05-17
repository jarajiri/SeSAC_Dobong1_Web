package _05_class.b_static;

/*
* 정적(static) 멤버
* - 인스턴스를 생성할 필요 없이 바로 접근할 수 있다.
* - 생성자를 통해서 객체를 생성할 필요가 없음.
* - 정적 메소드와 정적 블록은 객체가 없어도 실행 가능하므로, 내부에 인스턴스 필드나 메소드 사용 불가능
* - this 사용 불가능
* */
public class Calculator {
    static double PI = Math.PI;

    static int plus(int x, int y){
        return x+y;
    }
    static int minus(int x, int y){
        return x-y;
    }

    static double circumference(int r){
        return 2* r *PI;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        int plusResult = plus(num1,num2);
        int minusResult = minus(num1,num2);
        double circleArea = num1*num2*PI;
        double lengthCircleResult= circumference(num1);

        System.out.println("더하기 연산 결과 : "+plusResult);
        System.out.println("빼기 연산 결과 : "+minusResult);
        System.out.println("원의 넓이 : "+circleArea);
        System.out.println("원의 둘레 : "+lengthCircleResult);
    }
}
