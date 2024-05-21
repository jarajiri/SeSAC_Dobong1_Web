package _05_class.f_interface.interfaceEx;
interface Move{
    void moveFoward();
    void moveBackward();
}
interface Power{
    void powerOn();
    void powerOff();
}
interface Car extends Move, Power{ // 인터페이스간 상속에는 extends 키워드를 쓰며 다중 상속익 가능
    void changeGear(int gear);
}

class Suv implements Car{

    @Override
    public void moveFoward() {
        System.out.println("전진");
    }

    @Override
    public void moveBackward() {
        System.out.println("후진");

    }

    @Override
    public void powerOn() {
        System.out.println("시동 ON");

    }

    @Override
    public void powerOff() {
        System.out.println("시동 OFF");

    }

    @Override
    public void changeGear(int gear) {
        System.out.println(gear+" 로 기어 변경");
    }
}
public class Interface01 {
    public static void main(String[] args) {
        Suv suv = new Suv();
        suv.powerOn();
        suv.changeGear(2);
        suv.moveFoward();
        suv.moveBackward();
        suv.powerOff();
    }
}
