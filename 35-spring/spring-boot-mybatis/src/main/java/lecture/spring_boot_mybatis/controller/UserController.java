package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.UserDto;
import lecture.spring_boot_mybatis.service.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    @ResponseBody
    public List<UserDto> getUsers(){
        return userService.getUserList();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public UserDto getOneUser(
            @PathVariable Integer id
    ){
        return userService.getOneUser(id);
    }

}