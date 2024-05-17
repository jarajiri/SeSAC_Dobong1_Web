package _05_class.a_access_modifier.pack4;

import _05_class.a_access_modifier.pack3.A;

public class C {
    public static void main(String[] args) {
        A a = new A();
        // System.out.println(a.field2); // public 이 아니기 때문에 외부 패키지에서 접근 불가

        a.method3();
        // a.method1(); // default, 접근 불가
        // a.method2(); // private, 접근 불가
    }
}
