package lecture.springbootthymeleaf.Vo;

import lombok.Getter;

import java.time.LocalDate;
import java.util.Arrays;

@Getter
public class UserVo2 {
    private String name;
    private String gender;
    private LocalDate birth;
    private String[] favorite;

    public UserVo2(String name, String gender, String[] favorite, Integer year, Integer month, Integer day) {
        this.name = name;
        this.gender = gender;
        this.favorite = favorite;
        this.birth = LocalDate.of(year, month, day);
    }

    @Override
    public String toString() {
        return "UserVo2{" +
                "name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", birth=" + birth +
                ", favorite='" + Arrays.toString(favorite) + '\'' +
                '}';
    }
}