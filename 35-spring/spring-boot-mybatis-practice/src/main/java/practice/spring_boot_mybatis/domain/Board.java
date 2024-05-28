package practice.spring_boot_mybatis.domain;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String created;
}
