package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // Spring 에게 해당 인터페이스가 mybatis의 매퍼 역할을 하는것을 알림
public interface UserMapper {
    List<User> retrieveAll();
}
