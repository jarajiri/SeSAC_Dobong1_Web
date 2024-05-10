package _02_control_statement;

import java.util.Scanner;

// 메소드 실습
public class Practice05 {
    public static void calc(double a, double b){
        System.out.println("덧셈결과 : "+(a+b));
        System.out.println("뺄셈결과 : "+(a-b));
        System.out.println("나눗셈결과 : "+(a/b));
        System.out.println("곱셈 결과 : "+(a*b));
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("숫자 두 개를 입력하세요");
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        calc(a,b);
    }
}
