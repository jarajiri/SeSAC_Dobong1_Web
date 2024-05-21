package _05_class.f_interface;

public interface RemoteControl {
    // 인터페이스는 추상메서드를 포함해야 한다.
    // 인터페이스에서 추상 메서드 선언시 abstract 키워드 생략 가능

    public void turnOn();
    public void turnOff();
    public void setVolume(int volume);

    // 상수 필드
    // JAVA 인터페이스에서 선언된 필드는 기본적으로 (static final) 특성을 가진다.
    int MAX_VALUE=10; // static final 생략해도 컴파일러가 자동으로 주가
    static final int MIN_VALUE=0;
}
