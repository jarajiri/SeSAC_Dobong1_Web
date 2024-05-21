package _05_class.f_interface;

public class Television implements RemoteControl{
    private int volume;
    @Override
    public void turnOn() {
        System.out.println("텔레비전을 켭니다");
    }

    @Override
    public void turnOff() {
        System.out.println("텔레비전을 끕니다");

    }

    @Override
    public void setVolume(int volume) {
        if(volume > RemoteControl.MAX_VALUE){
            this.volume=volume;
        }else if(volume < RemoteControl.MIN_VALUE){
            this.volume=volume;
        }else{
            this.volume=volume;
        }
        System.out.println("텔레비전의 현재 볼륨 : "+this.volume);

    }
}
