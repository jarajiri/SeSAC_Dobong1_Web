package _05_class.e_abstract;

public class Square extends Shape{
    private String type;
    public Square(String color,String type){
        super(color);
        setType(type);
    }
    @Override
    public void draw(){
        System.out.println("사각형 그리기");
    }
    public String getType(){
        return this.type;
    }
    public void setType(String type){
        this.type=type;
    }
    public void showType(){
        System.out.printf("사각형의 종류는 %s 입니다. %n",type);
    }
}
