package lecture.spring_boot_mybatis.dto;

import lombok.*;

@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DefaultResDTO {
    private boolean result;
    private String errorMsg;
}
