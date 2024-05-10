package _02_control_statement;

import java.util.Scanner;

public class Conditional {
    public static void main(String[] args) {
        int number = 10;
        if(number % 2 ==0) System.out.println("짝수입니다.");
        else System.out.println("홀수입니다.");

        if(number%3==0) System.out.println("3의 배수입니다.");
        else if(number%5==0) System.out.println("5의 배수입니다.");
        else System.out.println("3의 배수, 5의 배수가 아닙니다.");

        String dayOfWeek;
        int day = 1;
        switch (day){
            case 1:
                dayOfWeek="일요일";
                break;
            case 2:
                dayOfWeek="월요일";
                break;

            case 3:
                dayOfWeek="화요일";
                break;

            case 4:
                dayOfWeek="수요일";
                break;

            case 5:
                dayOfWeek="목요일";
                break;

            case 6:
                dayOfWeek="금요일";
                break;

            case 7:
                dayOfWeek="토요일";
                break;
            default:
                dayOfWeek="잘못된 입력입니다.";
        }
        System.out.println(dayOfWeek);

        // 문자열 비교해보기
        Scanner sc = new Scanner(System.in);
        System.out.println("이름을 입력해주세요");
        String name = sc.nextLine();
        sc.close();
        System.out.println("name = " + name);
        System.out.println("name == rime >>> " + (name=="rime")); // false
        System.out.println("name.equals(\"rime\") >>> " + name.equals("rime")); // true

        // 문자열 리터럴 값이 저장되는위치 >> String Constant Pool에 저장되어 같은 리터럴값이라면 같은 주소를 사용
        String str1 = "hello";
        String str2 = "hello";
        System.out.println(str1==str2); // true
        System.out.println(str1.equals(str2)); //true

        /*
        * 비교 연산자는(==) 두 객체의 값을 비교하는게 아닌, "주소"(메모리 위치)를 비교함
        * .equals 메서드는 두 객체의 "내용"이 동일한지 비교
        * */
        // 생성자롤 통해 생성한 인스턴스는 다른 객체
        String str3 = new String("hello");
        String str4 = new String("hello");
        System.out.println(str3==str4); // false
        System.out.println(str3.equals(str4)); // true
    }
}
