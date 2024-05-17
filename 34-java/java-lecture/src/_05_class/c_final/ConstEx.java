package _05_class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
        // Const.MAX_VALUE = 200; // error
        Const.MIN_VALUE = 5;
        System.out.println(Const.MIN_VALUE);

        // final 변수 접근
        // System.out.println(Const.name); // static이 아니기 때문에 인스턴스 생성 후 접근
        Const con1 = new Const();
        System.out.println(con1.name);
        // con1.name = "boret"; // 접근은 가능하지만 변경 불가능 final 이기 때문
    }
}
