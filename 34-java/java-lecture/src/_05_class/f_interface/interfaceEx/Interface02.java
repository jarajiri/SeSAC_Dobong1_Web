package _05_class.f_interface.interfaceEx;
abstract class MyAbstractClass{
    public abstract void abstractMethod();

}
interface MyInterface{
    void interfaceMethod();
}
// 추상 클래스와 인터페이스를 조합해서 사용 가능
public class Interface02 extends MyAbstractClass implements MyInterface {
    @Override
    public void abstractMethod() {

    }

    @Override
    public void interfaceMethod() {

    }
}
