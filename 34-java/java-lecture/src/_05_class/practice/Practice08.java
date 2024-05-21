package _05_class.practice;
// 인터페이스 실습
public class Practice08 {
    public static void main(String[] args) {
        Mp3Player mp3Player = new Mp3Player();
        System.out.println("==== MP3 Player ====");
        mp3Player.play();
        mp3Player.stop();
        CdPlayer cdPlayer = new CdPlayer();
        System.out.println("==== CD Player ====");
        cdPlayer.play();
        cdPlayer.stop();
    }
}

interface Music{
     void play();
     void stop();

}
class Mp3Player implements Music{
    @Override
    public void play() {
        System.out.println("MP3 플레이어에서 \'아이유 블루밍\' 음악을 재생합니다");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 \'아이유 블루밍\' 음악을 정지합니다.");

    }
}

class CdPlayer implements Music{
    @Override
    public void play() {
        System.out.println("CD 플레이어에서 \'아이유 꽃갈피\' 앨범을 재생합니다");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 \'아이유 꽃갈피\' 앨범을 정지합니다.");
    }
}
