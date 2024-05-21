package _05_class.practice;

public class Practice05 {
    public static void main(String[] args) {
        System.out.println("====== Bus 정보 ======");
        Bus bus = new Bus("Hyundai", "City Bus", "2022", 30);
        System.out.println(bus.toString());
        bus.start();
        bus.transfer();
        bus.stop();
        System.out.println("====== Car 정보 ======");
        Car car = new Car("Toyota", "Camry", "2023", true);
        System.out.println(car.toString());
        car.start();
        car.parking();
        car.stop();
        System.out.println("====== Motorcycle 정보 ======");
        Motorcycle motorcycle = new Motorcycle("Harley-Davidson", "Sportster", "2021", "A");
        System.out.println(motorcycle.toString());
        motorcycle.start();
        motorcycle.houl();
        motorcycle.stop();

    }
}

class Vehicle {
    private String brand;
    private String model;
    private String year;

    public Vehicle(String brand, String model, String year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public void start() {
        System.out.println("차량 시동을 걸었습니다.");
    }

    public void stop() {
        System.out.println("차량을 정지했습니다.");
    }

    @Override
    public String toString() {
        return "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year='" + year + "\', ";

    }
}

class Bus extends Vehicle {
    private int passengerCapacity;

    public Bus(String brand, String model, String year, int passengerCapacity) {
        super(brand, model, year);
        this.passengerCapacity = passengerCapacity;
    }

    public void transfer() {
        System.out.println("승객을 운송합니다.");
    }

    @Override
    public String toString() {
        return "Bus{" +
                super.toString() +
                "passengerCapacity=" + passengerCapacity +
                "} ";
    }
}

class Car extends Vehicle {
    private boolean convertible;

    public Car(String brand, String model, String year, boolean convertible) {
        super(brand, model, year);
        this.convertible = convertible;
    }

    public void parking() {
        System.out.println("주차했습니다.");
    }

    @Override
    public String toString() {
        return "Car{" +
                super.toString() +
                "convertible=" + convertible +
                "} ";
    }
}

class Motorcycle extends Vehicle {
    private String licenseType;

    public Motorcycle(String brand, String model, String year, String licenseType) {
        super(brand, model, year);
        this.licenseType = licenseType;
    }

    public void houl() {
        System.out.println("울림통을 합니다.");
    }
    @Override
    public String toString() {
        return "Motorcycle{" +
                super.toString() +
                "licenseType=" + licenseType +
                "} ";
    }
}