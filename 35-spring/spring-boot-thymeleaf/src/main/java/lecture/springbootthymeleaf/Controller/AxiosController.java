package lecture.springbootthymeleaf.Controller;

import lecture.springbootthymeleaf.Dto.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AxiosController {
    @GetMapping("/axios/response1")
    @ResponseBody
    public String api1(
            @RequestParam(value = "name") String name,
            @RequestParam(value = "age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }
    //ok
    @GetMapping("/axios/response2")
    @ResponseBody
    public String api2(
            UserDto userDto) {
        String msg = "이름 : " + userDto.getName() + "\n나이 : " + userDto.getAge();
        return msg;
    }
    //
    @PostMapping("/axios/response3")
    @ResponseBody
    public String api3(
            @RequestParam(value = "name") String name,
            @RequestParam(value = "age") String age) {
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String api4(
            UserDto userDto) {
        String msg = "이름 : " + userDto.getName() + "\n나이 : " + userDto.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String api5(
            @RequestBody UserDto userDto) {
        String msg = "이름 : " + userDto.getName() + "\n나이 : " + userDto.getAge();
        return msg;
    }

    /*
    * Axios - DTO
    * 1번 - 정상 응답
    * 2번 - 정상 응답
    * 3번 - 오류
    *   - @RequestParam : uri에 있는 데이터를 받음.
    *   - required = false가 없으면, 데이터 null 허용 x
    * 4번 - 응답이 있으나 null
    *   - axios 요청은 json 데이터 body로 보내줌
    *   - 컨트롤러에서는 받는 데이터는 urlencoded 형태로 응답을 받음
    *   - null이 들어오나 오류 발생은 x
    * 5번 - 정상 응답
    *
    * */

    /*
    * Axios - VO
    * 1번 - 정상 응답
    * 2번 - null
    * 3번 - 오류
    * 4번 - null
    * 5번 - 정상응답
    * */
}
