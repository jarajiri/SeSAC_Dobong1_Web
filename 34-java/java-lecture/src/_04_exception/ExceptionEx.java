package _04_exception;

// - Error : 시스템이 비정상적인 상황에 발생한 경우
// - 코드에 의해서 수습할 수 없는 심각한 오류
// - OutOfMemoryError, ThreadDeath, ..

/*
 * 일반 예외(Exception, checked Exception), 실행 예외(Runtime Exception/unchecked Exception)
 * - 일반 예외
 *   - 확인시점 : 컴파일 시점, 명시적으로 예외처리 반드시 해야함
 *   - IOException, FileNotFoundException
 * - 실행 예외
 *   - 확인시점 : 런타임시점, 예외처리가 강제되지 않지만 프로그램의 정상적인 작동을 위해 예외처리를 해주는게 좋다.
 *   - NullPointerException, InputMisMatchException
 * */

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionEx {

    public static String divide(int x, int y) {
        return x + " / " + y + " = " + (x / y);
    }

    public static int getValueByIdx(int[] arr, int idx) {
        return arr[idx];
    }

    public static int getLength(String str) {
        return str.length();
    }

    public static void main(String[] args) {
        System.out.println(divide(6, 2));
        // System.out.println(divide(6,0));
        // System.out.println("여기까지 나오나?");

        // case1. 0으로 나누기 (ArithmeticException)
        try {
            System.out.println("나누기 연산 시작!");
            System.out.println(divide(6, 0));
        } catch (ArithmeticException error) { // 수학적 연산 예외
            // catch의 error 부분에는 어떤 에러인지 명시해야함

            // e.getMessage() : 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 발생! " + error.getMessage()); // by zero
            // e.toString() : 예외의 종류까지 리턴
            System.out.println("나누기 중 예외 발생! " + error.toString()); // java.lang.ArithmeticException: / by zero
        } finally {
            System.out.println("나누기 연산 종료!");
        }

        // case2. null 접근 (NullPointerException)
        try {
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        } catch (NullPointerException e) {
            System.out.println("단어 길이 연산 중 예외 발생 " + e.getMessage());
            System.out.println("단어 길이 연산 중 예외 발생 " + e.toString());
        }

        // case3. index 값으로 배열 접근시 범위에 없는 값으로 접근 (ArrayIndexOutOfBoundsException)
        int[] numbers= {10,20,30,40,50};
        try {
            System.out.println(getValueByIdx(numbers,2));
            System.out.println(getValueByIdx(numbers,numbers.length));
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("배열 인덱싱 중 예외 발생! " + e.getMessage());
            System.out.println("배열 인덱싱 중 예외 발생! " + e.toString());
        }

        // case4. 입력 형식 예외(InputMismatchException)
        Scanner sc = new Scanner(System.in);
        try{
            System.out.println("정수를 하나 입력해주세요!");
            int num = sc.nextInt(); // 정수만 입력 받을 수 있음! 예외처리가 필요
            System.out.println("입력된 정수 " + num);
        }
        catch (InputMismatchException e){ // import 필요
            System.out.println("입력 형식 예외 발생! " + e.getMessage()); // null
            System.out.println("입력 형식 예외 발생! " + e.toString()); // java.util.InputMismatchException
        }


        /*
        * try{} catch(예외 이름 e){} finally{}
        * 1. catch 여러 개 이어서 쓰기 가능
        *   - 예외가 2개 이상 발생할 경우가 있는 경우, try{} catch(예외 이름 e){} catch(예외 이름 e){} ...
        * 2. catch 문 하나에 에러 여러 개 포함 가능
        *   - catch(예외1 || 예외2 e)
        *   - 예외처리 구문이 비슷할 때만 가능
        *   - 두 예외가 상속관계에 있지 않을때만 가
        * */
    }

}
