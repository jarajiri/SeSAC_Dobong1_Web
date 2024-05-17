package _04_exception;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice02 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("배열의 크기를 입력하세요 : ");
        try {
            int size = sc.nextInt();
            if(size<=0){
                // throw 문을 통해서 예외를 생성
                throw new IllegalArgumentException("배열의 크기는 1 이상이어야 합니다.");
            }
            int[] arr = new int[size];

            for(int i=0;i<size;i++){
                System.out.print("정수"+(i+1)+" : ");
                arr[i]= sc.nextInt();
            }

            ArrayList<Integer> find = findDuplicate(arr);

            // 중복된 요소가 없다면
            if(find.isEmpty()){
                System.out.println("중복된 요소가 없습니다.");
            }else{
                System.out.println("중복 요소 : " + find);
            }

        }catch (InputMismatchException e){
            System.out.println("입력 형식이 맞지 않습니다.");
        }catch (IllegalArgumentException e){
            System.out.println(e.toString());
        }finally {
            sc.close();
        }
    }

    // 중복 체크 메서드
    public static ArrayList<Integer> findDuplicate(int[] arr){
        // arr = [1,2,2,3,5]
        ArrayList<Integer> dup = new ArrayList<>();

        // 중복된 요소를 찾아서 dup 배열에 추가
        /*
         * 1 == 2,2,3,5
         * 2 == 2,3,5
         * 2 == 3,5
         * 3 == 5        *
         * */

        // 이중 for 문
        for(int i=0; i<arr.length-1;i++){
            for (int j = i+1; j < arr.length ; j++) {
                if(arr[i]==arr[j] && !dup.contains(arr[i]))
                    // 중복된 요소가 있는것 && dup에 없는 요소라면
                    dup.add(arr[i]);
            }
        }

        return dup;
    }

}
