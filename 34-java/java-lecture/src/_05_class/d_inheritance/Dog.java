package _05_class.d_inheritance;

public class Dog extends Animal{
    // 자식 클래스 메서드 추가
    void fetch(){
        System.out.println("공 가져와");
    }
    @Override
    // 오버라이딩할 때는 함수의 이름, 반환 타입 인자의 개수와 인자의 타입 모두 같아야 함
    void makeSound(String t) {
        System.out.println(super.name); // 부모 필드 접근
        super.makeSound(t); // 부모 메서드 접근
    }
    /*
    * Overriding : 상속이 일어났을 때 자식 클래스에서 메서드를 재정의 하는것
    * - 부모 메서드 재정의시, 내용의 일부만 변경되더라도 처음부터 다시 정의
    * - 이 때, super.method()를 이용하여 내용을 그대로 가져올 수 있다.
    * */
}
