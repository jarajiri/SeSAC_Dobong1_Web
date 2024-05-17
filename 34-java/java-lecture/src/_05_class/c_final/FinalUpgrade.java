package _05_class.c_final;

public class FinalUpgrade {
    public static void main(String[] args) {
        FinalMethod finalMethod = new FinalMethod();
        SubClass subClass = new SubClass();
        finalMethod.showMessage();
        subClass.showMessage();
    }

}

class FinalMethod{
    final void showMessage(){
        System.out.println("final이 붙은 메서드는 오버라이딩 할 수 없습니다.");
    }
}

class SubClass extends  FinalMethod{
    // 메서드 재정의
    // void showMessage(){} // error, final 키워드가 붙은 메서드의 경우 오버라이딩 불가
}

// 클래스 레벨의 final 키워드
final class FinalClass{

}
// 클래스에 final이 붙은 경우에는 자식클래스에게 상속 불가능
// class SubClass2 extends FinalClass{} // error, final 키워드가 붙은 클래스는 상속받을 수 없다.