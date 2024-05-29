package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.UserDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getUsers(){
        return userRepository.findAll();
    }

    public List<UserEntity> getUsersByName(String name){
        return userRepository.findByNameRaw(name);
        // return userRepository.findByName(name);
    }

    public UserEntity getUserById(int id){
        Optional<UserEntity> user = userRepository.findById(id);
        if(user.isPresent()){ // user의 값이 null이 아니라면 true
            return user.get(); // UserEntity
        } else{
            throw new RuntimeException("user not found");
        }
    }

    public UserEntity insertUser(UserDTO userDTO){
        UserEntity newUser = UserEntity.builder()
            .name(userDTO.getName())
            .nickname(userDTO.getNickname())
            .build();
        // .save(entity 객체) : insert, update 담당
        // repository에 이미 구현이 되어있음
        // pk가 없다면 insert, pk가 있다면 update
        return userRepository.save(newUser);
    }

    public UserEntity updateUser(int id, UserDTO userDTO){
        // 해당 유저가 있는 먼저 조회(id)
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(()->new RuntimeException("user not found"));

        // 조회된 값이 있다면 UserEntity에 담고, 그렇지 않다면 예외발생

        UserEntity updateUser = UserEntity.builder()
            .id(id)
            .name(userDTO.getName())
            .nickname(userDTO.getNickname())
            .build();
        // entity
        return userRepository.save(updateUser);
    }

    public void deleteUser(int id){
        // 해당 유저가 있는 먼저 조회(id)
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(()->new RuntimeException("user not found"));


        userRepository.delete(userEntity);
    }

    public UserEntity getTodosByUser(int userId) {
        UserEntity userEntity = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("user doesn't exist"));

        return userRepository.findTodosByUser(userId);
        // UserEntity { id, name, nickname, todos: [] }
    }
}
