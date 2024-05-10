package _02_control_statement;

import java.util.Scanner;
// 반복문 실습
public class Practice04 {
    public static void main(String[] args) {
        System.out.println("숫자를 입력하세요");
        Scanner sc = new Scanner(System.in);
        int number = Integer.parseInt(sc.nextLine());
        for(int i =1; i<=number;i++){
            System.out.print(i + " ");
        }
        sc.close();
    }
}
