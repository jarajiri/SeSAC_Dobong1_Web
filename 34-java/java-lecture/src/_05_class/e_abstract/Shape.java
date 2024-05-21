package _05_class.e_abstract;

public abstract class Shape {
    private String color;
    public Shape(String color){
        this.color= color;
    }
    public String getColor(){
        return this.color;
    }
    // 일반 메서드
    public void start(){
        System.out.println("도형을 그려보자");
    }
    // 추상 메서드
    // 구현부 ({}) 없이 선언만 한다.
    // 구현은 자식 클래스에서 오버라이딩을 통해 진행
    // 자식 클래스에서 공통적으로 사용할 예정이지만, 구현부가 모두 다를때 사용
    // 선택적이 아닌 필수적으로 오버라이딩 필요
    public abstract void draw();

}
