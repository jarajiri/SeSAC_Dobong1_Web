package _05_class.f_interface;

public class RemoteControlEx {
    public static void main(String[] args) {
        // 인터페이스는 reference 타입이라 null로 초기화 가능
        RemoteControl rc;
        rc=null;

        rc=new Television();
        rc.turnOn();
        rc.setVolume(5);
        rc.turnOff();
        System.out.println("-------------------");
        rc=new Audio();
        rc.turnOn();
        rc.setVolume(-1);
        rc.turnOff();
        System.out.println("-------------------");
        rc=new Audio();
        rc.turnOn();
        rc.setVolume(55);
        rc.turnOff();
    }
}
