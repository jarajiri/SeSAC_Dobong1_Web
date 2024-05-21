package _05_class.practice;

import _05_class.a_access_modifier.pack3.A;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Practice09 {
    public static void main(String[] args) {
        List<Vehicles> list = new ArrayList<>();
        Vehicles car = new Cars("자동차", 200);
        Vehicles airplane = new Airplane("비행기", 1000);
        list.add(car);
        list.add(airplane);
        for (Vehicles v : list){
            v.move();
            if(v instanceof Flyable){
                ((Flyable) v).fly();
            };
        }
    }
}

abstract class Vehicles{
    private String name;
    private int maxSpeed;

    public Vehicles(String name, int maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }
    abstract void move();
}

interface Flyable{
    public void fly();
}

class Cars extends Vehicles{
    public Cars(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    @Override
    void move() {
        System.out.println("도로를 따라 이동 중");
    }
}

class Airplane extends Vehicles implements Flyable{
    public Airplane(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    @Override
    void move() {
        System.out.println("하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000피트에서 비행중");
    }
}