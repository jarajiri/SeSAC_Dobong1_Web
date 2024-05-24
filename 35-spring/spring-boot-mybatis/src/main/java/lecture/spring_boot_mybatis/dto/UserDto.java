package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDto {
    private Integer id;
    private String name;
    private String nickname;
    private Integer no;
}
