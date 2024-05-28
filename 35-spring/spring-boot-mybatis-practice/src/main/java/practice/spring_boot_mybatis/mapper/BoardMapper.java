package practice.spring_boot_mybatis.mapper;

import org.apache.ibatis.annotations.Mapper;
import practice.spring_boot_mybatis.domain.Board;
import practice.spring_boot_mybatis.dto.BoardDTO;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> getBoardAll();
    Board getBoardOne(Integer id);
    void insertBoard(Board board);
    List<Board> getBoardSearch(String search);
    void updateBoard(Board board);
    void deleteBoard(Integer id);
}
