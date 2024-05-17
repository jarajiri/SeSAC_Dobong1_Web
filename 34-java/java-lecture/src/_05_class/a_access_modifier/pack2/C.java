package _05_class.a_access_modifier.pack2;

import _05_class.a_access_modifier.pack1.B;

public class C {
    public static void main(String[] args) {
        // A instanceA = new A(); // default 접근제한자를 가진 A 클래스에 접근할 수 없음
        B instanceB = new B(); // public 접근제한자를 가진 B 클래스를, 어디서든 import만 한다면 사용가능

        /*
        * C 클래스는 A,B 클래스와 다른 패키지에 있으므로
        * default 제한자인 A 클래스에서는 에러가 발생
        * public 제한자인 B 클래스에서는 정상 동작
        * */
    }
}
