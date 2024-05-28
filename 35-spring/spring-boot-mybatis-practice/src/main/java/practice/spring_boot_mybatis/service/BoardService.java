package practice.spring_boot_mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import practice.spring_boot_mybatis.domain.Board;
import practice.spring_boot_mybatis.dto.BoardDTO;
import practice.spring_boot_mybatis.dto.ResDTO;
import practice.spring_boot_mybatis.mapper.BoardMapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    // boardDto
    // id, title, content, writer, created, no
    // board(domain)
    // id, title, content, writer, created

    // 전체 게시글 조회
    // domain -> dto
    public List<BoardDTO> getBoardAll() {
        List<Board> result = boardMapper.getBoardAll();
        List<BoardDTO> boards = new ArrayList<>();
        for (Board board : result) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .created(board.getCreated())
                    .no(board.getWriter() + board.getId())
                    .build();
            boards.add(boardDTO);
        }

        return boards;
    }

    // 특정 게시글 조회
    // domain -> dto
    public BoardDTO getBoardOne(Integer id) {
        Board result = boardMapper.getBoardOne(id);
        if (result != null) {
            return BoardDTO.builder()
                    .id(result.getId())
                    .title(result.getTitle())
                    .content(result.getContent())
                    .writer(result.getWriter())
                    .created(result.getCreated())
                    .no(result.getWriter() + result.getId())
                    .build();
        } else {
            return null;
        }
    }

    // 게시글 추가
    // dto -> domain
    public void insertBoard(BoardDTO boardDTO) {
        Board insertBoard = Board.builder()
                .title(boardDTO.getTitle())
                .writer(boardDTO.getWriter())
                .content(boardDTO.getContent())
                .build();
        boardMapper.insertBoard(insertBoard);
    }

    // 게시글 조회(제목)
    // domain -> dto
    public List<BoardDTO> getBoardSearch(String search) {
        List<Board> result = boardMapper.getBoardSearch(search);
        List<BoardDTO> boards = new ArrayList<>();
        for (Board board : result) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .created(board.getCreated())
                    .no(board.getWriter() + board.getId())
                    .build();
            boards.add(boardDTO);
        }
        return boards;
    }

    // 게시글 수정
    // dto -> domain
    public void updateBoard(Integer id, BoardDTO boardDTO) {
        Board updateboard = Board.builder()
                .id(id)
                .title(boardDTO.getTitle())
                .content(boardDTO.getTitle())
                .writer(boardDTO.getWriter())
                .created(LocalDateTime.now().toString())
                .build();
        boardMapper.updateBoard(updateboard);
    }
    // 게시글 삭제
    public void deleteBoard(Integer id) {
        boardMapper.deleteBoard(id);
    }
}
