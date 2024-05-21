package _05_class.a_access_modifier.pack7;


import _05_class.a_access_modifier.pack6.A;

// A 클래스를 상속받지 않은 외부 클래스
public class C {
    void methodC(){
        // A a = new A(); // 패키지 6의 A 클래스를 import 하면 클래스에는 접근가능하지만 생성자에는 접근 불가능(protected)
    }
}
