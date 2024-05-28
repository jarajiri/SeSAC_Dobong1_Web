package practice.spring_boot_mybatis.dto;

import lombok.*;

@Getter @Setter
@Builder
public class ResDTO {
    private boolean result;
    private String msg;
}
