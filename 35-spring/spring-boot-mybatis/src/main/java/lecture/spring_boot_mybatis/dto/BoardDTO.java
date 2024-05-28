package lecture.spring_boot_mybatis.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
// 객체를 생성하는 것을 도와주는 도구
// builder 패턴
// 전체 필드를 인자로 받는 생성자를 자동으로 생성
// 기본생성자가 존재하지 않으므로 기본생성자 사용시 오류가 발생
public class BoardDTO {

    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private String no;
}
