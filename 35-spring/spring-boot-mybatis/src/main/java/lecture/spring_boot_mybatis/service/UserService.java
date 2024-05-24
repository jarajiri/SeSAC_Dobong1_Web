package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserDto;
import lecture.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    // 필드 주입
    @Autowired
    private UserMapper userMapper;

    public List<UserDto> getUserList() {
        List<User> result = userMapper.retrieveAll();
        List<UserDto> users = new ArrayList<>();
        for (int i = 0; i < result.size(); i++) {
            UserDto userDto = new UserDto();
            userDto.setId(result.get(i).getId());
            userDto.setName(result.get(i).getName());
            userDto.setNickname(result.get(i).getNickname());
            userDto.setNo(i + 1);

            users.add(userDto);
        }
        return users;
    }

    public UserDto getOneUser(Integer id){
        User result = userMapper.getOneUser(id);
        UserDto userDto = new UserDto();
        userDto.setId(result.getId());
        userDto.setName(result.getName());
        userDto.setNickname(result.getNickname());
        userDto.setNo(result.getId());
        return userDto;
    }

}
