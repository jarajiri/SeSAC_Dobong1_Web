package lecture.springbootthymeleaf.Controller;

import lecture.springbootthymeleaf.Dto.UserDto;
import lecture.springbootthymeleaf.Vo.UserVo;
import lecture.springbootthymeleaf.Vo.UserVo2;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
public class PracticeController {
    @GetMapping("/prac/1")
    public String prac1(Model model) {
        model.addAttribute("age", 20);
        return "prac1";
    }

    @GetMapping("/prac/2")
    public String prac2(Model model) {
        List<Person> people = new ArrayList<>();
        Person p1 = new Person("kim", 10);
        Person p2 = new Person("lee", 20);
        Person p3 = new Person("hong", 30);
        Person p4 = new Person("park", 40);
        Person p5 = new Person("shin", 50);
        people.add(p1);
        people.add(p2);
        people.add(p3);
        people.add(p4);
        people.add(p5);
        model.addAttribute("people", people);
        return "prac2";
    }

    @GetMapping("/introduce/{name}")
    @ResponseBody
    public String prac3_1(
            @PathVariable String name) {
        return "내 이름은 " + name;
    }

    @GetMapping("/introduce2")
    @ResponseBody
    public String prac3_2(
            @RequestParam String name,
            @RequestParam Integer age) {
        return "내 이름은 " + name + "<br/>내 나이는 " + age;
    }

    @GetMapping("/prac/4")
    public String prac4_form() {
        return "prac4";
    }

    @PostMapping("/prac/4")
    public String prac4_result(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam Integer year,
            @RequestParam Integer month,
            @RequestParam Integer day,
            @RequestParam String favorite,
            Model model) {
        User user = new User(name, gender, favorite, year, month, day);
        System.out.println(user);
        model.addAttribute("user", user);
        return "prac4";
    }

    // 동적폼전송 실습
    @GetMapping("/prac/5")
    public String prac5_form() {
        return "prac5";
    }

    @PostMapping("/prac/5")
    @ResponseBody
    public String prac5_result(
            @RequestBody UserVo2 userVo2
    ){
        System.out.println(userVo2);
        return userVo2.getName()+"회원가입 성공\n" + userVo2 ;
    }
}

@Getter
@Setter
class User {
    private String name;
    private String gender;
    private LocalDate birth;
    private String favorite;

    public User(String name, String gender, String favorite, Integer year, Integer month, Integer day) {
        this.name = name;
        this.gender = gender;
        this.favorite = favorite;
        this.birth = LocalDate.of(year, month, day);
        System.out.println(birth);
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", birth=" + birth +
                ", favorite='" + favorite + '\'' +
                '}';
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
