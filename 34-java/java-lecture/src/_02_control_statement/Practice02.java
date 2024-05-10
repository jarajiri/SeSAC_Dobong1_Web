package _02_control_statement;

import java.util.Scanner;
// 조건문 실습1
public class Practice02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("나이를 입력하세요");
        int age = Integer.parseInt(sc.nextLine());
        if(age>=20) System.out.println("성인");
        else if(age>=17&&age<=19) System.out.println("고등학생");
        else if(age>=14&&age<=16) System.out.println("중학생");
        else if(age>=8&&age<=13) System.out.println("초등학생");
        else System.out.println("유아");
        sc.close();
    }
}
