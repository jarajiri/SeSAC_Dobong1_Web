package lecture.springbootthymeleaf.Controller;

import lecture.springbootthymeleaf.Dto.UserDto;
import lecture.springbootthymeleaf.Vo.UserVo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
public class ApiController {

    @ExceptionHandler
    public String errHandler(Exception e){
        System.out.println("error"+e.getMessage());
        return "error";
    }

    @GetMapping("")
    public String get(){
        return "api";
    }

    // GET localhost:8080/api/res1?name={name}&age={age}
    // @GetMapping("/res1")
    // public String getRes1(
    //         @RequestParam String name,
    //         @RequestParam int age,
    //         Model model) {
    //     model.addAttribute("name", name);
    //     model.addAttribute("age", age);
    //     return "res";
    // }
    // ?name=lily&age=88
    // ?name=lily

    @GetMapping("/res1")
    public String getRes1(
            @RequestParam(value = "name") String nickname,
            @RequestParam(required = false, value = "age") Integer age,
            Model model) {
        model.addAttribute("name", nickname);
        model.addAttribute("age", age);
        return "res";
    }

    // GET localhost:8080/api/res2/{name}/{age}
    @GetMapping({"/res2/{name}", "/res2/{name}/{param2}"})
    public String getRes2(
            @PathVariable String name,
            @PathVariable(value = "param2", required = false) Integer age,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    // POST localhost:8080/api/res3 (name, age)
    @PostMapping("/res3")
    public String postRes(
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @PostMapping("/res3/{param1}")
    public String postRes2(
            @PathVariable String param1,
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        System.out.println("param1: " + param1);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @GetMapping("/res4")
    @ResponseBody
    public String getRes4() {
        return "hello";
    }

    @PostMapping("/res5")
    public String postRes5(
            @ModelAttribute UserDto userDto,
            // @ModelAttribute
            // 객체로 데이터를 전송받게끔 도와줌
            // 객체로 값을 받아올때 setter 를 이용해서 받아오기 때문에 클래스에 setter 함수가 있어야함
            // url에 있는 데이터를 매핑
            // 생략 가능
            Model model){
        model.addAttribute("name",userDto.getName());
        model.addAttribute("age",userDto.getAge());
        return "res";
    }

    @PostMapping("/res6")
    public String postRes6(
            @ModelAttribute UserVo userVo,
            Model model){
        model.addAttribute("name",userVo.getName());
        model.addAttribute("age",userVo.getAge());
        return "res";
    }

    @GetMapping("/res7")
    public String getRes7(
            @RequestBody UserDto userDto,
            Model model
    ){
        // error
        // get 요청이기 때문에 body에서 값을 받아올 수 없음
        model.addAttribute("name",userDto.getName());
        model.addAttribute("age",userDto.getAge());
        return "res";
    }

    @PostMapping("/res8")
    public String postRes8(
            @RequestBody UserDto userDto,
            Model model
    ){
        // error
        // 일반 폼 전송의 Content-Type은 application/x-www-form-urlencoded
        // @RequestBody는 application/json Content-Type 타입만 읽어올 수 있다.
        model.addAttribute("name",userDto.getName());
        model.addAttribute("age",userDto.getAge());
        return "res";
    }
    // VO 객체로 테스트 해봐도 마찬가지

    @PostMapping("/res9")
    @ResponseBody
    public String postRes9(
            @RequestBody UserDto userDto
    ){
        return userDto.getName() + "님 환영합니다.";
    }

    @PostMapping("/res10")
    @ResponseBody
    public String postRes10(
            @RequestBody UserVo userVo
    ){
        // @RequestBody 는 dto 객체의 setter를 이용해서 매핑시키는게 아닌,
        // RequestBody 자체적으로 가지고 있는 메서드로 매핑시킴
        return userVo.getName() + "님 환영합니다.";
    }

    @GetMapping("/vo/response1")
    @ResponseBody
    public String vo1(UserVo userVo){
        String msg = userVo.getName();
        return msg;
    }
    @PostMapping("/vo/response2")
    @ResponseBody
    public String vo2(UserVo userVo){
        String msg = userVo.getName();
        return msg;
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    public String vo3(@RequestBody UserVo userVo){
        String msg = userVo.getName();
        return msg;
    }

}
