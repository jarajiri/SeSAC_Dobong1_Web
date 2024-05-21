package _05_class.a_access_modifier.pack6;

public class B {
    public void methodB() {
        // 같은 패키지에서는 생성자, 필드, 메서드 모두에게 접근가능
        A a = new A();
        a.field1 = 11;
        a.methodA();
    }
}
