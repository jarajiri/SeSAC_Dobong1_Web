package _04_exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice01 {

    public static void main(String[] args) {
        // pra1
        int[] arr = {1, 2, 3, 4};
        try {
            for (int i = 0; i < 6; i++) {
                System.out.println(arr[i]);
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("인덱스가 범위를 벗어났습니다.");
        }

        // pra2
        Scanner sc = new Scanner(System.in);
        System.out.println("배열의 크기를 입력해주세요");
        try {
            int length = sc.nextInt();
            int[] arr2 = new int[length];
            for (int i = 0; i < length; i++) {
                System.out.println("요소를 입력해주세요");
                arr2[i] = sc.nextInt();
            }
            int sum = 0;
            double avg = 0;
            for (int i : arr2) {
                sum += i;
                avg = (double) sum / length;
            }
            System.out.println("평균값 : " + avg);
        } catch (ArithmeticException | NullPointerException | InputMismatchException |
                 ArrayIndexOutOfBoundsException e) {
            System.out.println(e.toString());
        }
    }
}
