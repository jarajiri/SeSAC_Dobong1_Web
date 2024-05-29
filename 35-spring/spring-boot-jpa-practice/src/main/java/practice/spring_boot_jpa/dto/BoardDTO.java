package practice.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@Builder
public class BoardDTO {
    private Integer id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private Integer no;
}
