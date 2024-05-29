package lecture.spring_boot_jpa.controller;

import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    // GET localhost:8080/user
    // @GetMapping
    // public List<UserEntity> getUsers(){
    //     return userService.getUsers();
    // };

    // ResponseEntity 통일성 있는 응답을 보내기 위한 spring 내장 응답 객체
    // 적절한 응답 코드 및 본문을 생성해주는 역할
    @GetMapping
    public ResponseEntity<List<UserEntity>> getUsers() {
        List<UserEntity> users = userService.getUsers();
        return ResponseEntity.ok(users);
        // return ResponseEntity.ok().body(users);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getUsersByName(
        @PathVariable String name
    ) {
        // <?> : 와일드 카드
        List<UserEntity> users = userService.getUsersByName(name);

        // forEach 사용
        // List<UserDTO> resUsers = new ArrayList<>();
        // for(UserEntity u : users){
        //     UserDTO resUser = UserDTO.builder()
        //             .id(u.getId())
        //             .name(u.getName())
        //             .nickname(u.getNickname())
        //             .no(u.getId()+100)
        //             .build();
        // }

        // Stream 사용
        List<UserDTO> resUsers = users.stream()
            .map(u -> UserDTO.builder()
                .id(u.getId())
                .name(u.getName())
                .nickname(u.getNickname())
                .no(u.getId() + 100)
                .build()) // stream
            .collect(Collectors.toList()); // stream -> List
        return ResponseEntity.ok(resUsers);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUsersById(
        @PathVariable int id
    ) {
        try {
            return ResponseEntity.ok(userService.getUserById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> insertUser(
        @RequestBody UserDTO userDTO
    ) {
        try {
            UserEntity result = userService.insertUser(userDTO);
            UserDTO newUser = UserDTO.builder()
                .id(result.getId())
                .name(result.getName())
                .nickname(result.getNickname())
                .build();
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build());
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchUser(
        @RequestBody UserDTO userDTO,
        @PathVariable int id
    ) {
        try {
            UserEntity result = userService.updateUser(id, userDTO);
            UserDTO newUser = UserDTO.builder()
                .id(result.getId())
                .name(result.getName())
                .nickname(result.getNickname())
                .build();
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(
        @PathVariable int id
    ) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok().body(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build());
        }
    }

    // join
    @GetMapping("/todos/{userId}")
    public ResponseEntity<?> getTodosByUser(@PathVariable int userId) {
        try {
            return ResponseEntity.ok(userService.getTodosByUser(userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder()
                    .error(e.getMessage())
                    .build()
            );
        }
    }
}
