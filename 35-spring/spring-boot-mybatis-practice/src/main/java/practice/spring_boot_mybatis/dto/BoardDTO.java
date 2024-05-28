package practice.spring_boot_mybatis.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String created;
    private String no;

    @Override
    public String toString() {
        return "BoardDTO{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", writer='" + writer + '\'' +
                ", created='" + created + '\'' +
                ", no='" + no + '\'' +
                '}';
    }
}
