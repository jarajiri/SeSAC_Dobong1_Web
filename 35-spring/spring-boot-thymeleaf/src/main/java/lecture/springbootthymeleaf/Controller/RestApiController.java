package lecture.springbootthymeleaf.Controller;

import lecture.springbootthymeleaf.Dto.UserDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest-api")
public class RestApiController {

    @GetMapping("/user")
    public String get() {
        String name = "rime";
        Integer age = 15;
        return name + ", " + age;
    }

    @PostMapping("/user")
    public String post(@RequestBody UserDto userDto) {
        return userDto.getName() + ", " + userDto.getAge();
    }

    @PatchMapping("/user/{id}")
    public String patch(@RequestBody UserDto userDto,
                        @PathVariable Integer id
    ) {
        return id + "님의 정보 수정 : " + userDto.getName() + ", " + userDto.getAge();
    }
    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable Integer id
    ) {
        return id + "님의 정보 삭제";
    }


}