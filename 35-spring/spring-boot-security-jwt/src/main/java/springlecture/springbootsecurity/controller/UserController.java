package springlecture.springbootsecurity.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springlecture.springbootsecurity.dto.UserDTO;
import springlecture.springbootsecurity.entity.UserEntity;
import springlecture.springbootsecurity.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    // ResponseEntity는 사용자의 HttpRequest에 대한 응답 데이터를 포함하는 클래스이다.
    // HttpStatus, HttpHeaders, HttpBody를 포함
    // Return 할 때 객체의 타입이 명확하지 않을 때는 와일드카드(?)를 사용
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO){
        try{
            // 요청을 이용해 저장할 사용자 만들기
            UserEntity user = UserEntity.builder()
                .email(userDTO.getEmail())
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .build();

            UserEntity registeredUser = userService.create(user);
            UserDTO responseUserDTO = userDTO.builder()
                .email(registeredUser.getEmail())
                .username(registeredUser.getUsername())
                .id(registeredUser.getId())
                .build();

            return ResponseEntity.ok().body(responseUserDTO);
        }
        catch (Exception e) {
            return ResponseEntity
                .badRequest()
                .body(e.getMessage());
        }
    }

    @PostMapping("/signin")
    public  ResponseEntity<?> loginUser(@RequestBody UserDTO userDTO) {
        UserEntity user = userService.getByCredentials(userDTO.getEmail(), userDTO.getPassword());

        if(user != null) {
            final UserDTO responseUserDTO = UserDTO.builder()
                .email(user.getEmail())
                .id(user.getId())
                .build();

            return ResponseEntity.ok().body(responseUserDTO);
        } else {
            return ResponseEntity
                .badRequest()
                .body("login failed");
        }
    }
}
