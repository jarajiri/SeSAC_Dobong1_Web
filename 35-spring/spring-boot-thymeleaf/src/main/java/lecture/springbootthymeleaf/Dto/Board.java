package lecture.springbootthymeleaf.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Board {
    private Integer boardId;
    private String title;
    private String content;
    private String writer;

    public Board(Integer boardId, String title, String content, String writer) {
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.writer = writer;
    }

    @Override
    public String toString() {
        return "Board{" +
                "boardId=" + boardId +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", writer='" + writer + '\'' +
                '}';
    }
}
