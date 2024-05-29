package practice.spring_boot_jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import practice.spring_boot_jpa.dto.BoardDTO;
import practice.spring_boot_jpa.entity.BoardEntity;
import practice.spring_boot_jpa.repository.BoardRepository;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // 전체 게시글 조회
    public List<BoardDTO> getBoardAll() {
        List<BoardEntity> result = boardRepository.findAll();
        return result.stream().map(e -> BoardDTO.builder()
            .id(e.getId())
            .title(e.getTitle())
            .content(e.getTitle())
            .writer(e.getWriter())
            .registered(e.getRegistered().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
            .no(e.getId() + 100)
            .build()).collect(Collectors.toList());
    }

    // 게시글 조회(id)
    // 상세보기용
    public BoardDTO getBoardOne(Integer id) {
        BoardEntity result = boardRepository.findBoardEntityById(id)
            .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        return BoardDTO.builder()
            .id(result.getId())
            .title(result.getTitle())
            .content(result.getTitle())
            .writer(result.getWriter())
            .registered(result.getRegistered().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
            .no(result.getId() + 100)
            .build();
    }

    // 게시글 조회(제목)
    // 검색
    public List<BoardDTO> getBoardSearch(String search) {
        List<BoardEntity> result = boardRepository.findBoardEntityByTitle(search);
        return result.stream().map(e -> BoardDTO.builder()
            .id(e.getId())
            .title(e.getTitle())
            .content(e.getTitle())
            .writer(e.getWriter())
            .registered(e.getRegistered().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
            .no(e.getId() + 100)
            .build()).collect(Collectors.toList());
    }

    // 게시글 추가
    public void insertBoard(BoardDTO boardDTO) {
        boardRepository.save(BoardEntity.builder()
            .title(boardDTO.getTitle())
            .writer(boardDTO.getWriter())
            .content(boardDTO.getContent())
            .build());
    }

    // 게시글 수정
    public void updateBoard(Integer id, BoardDTO boardDTO) {
        getBoardOne(id);
        boardRepository.save(BoardEntity.builder()
            .id(id)
            .title(boardDTO.getTitle())
            .writer(boardDTO.getWriter())
            .content(boardDTO.getContent())
            .build());
    }

    // 게시글 삭제
    public void deleteBoard(Integer id) {
        getBoardOne(id);
        boardRepository.deleteById(id);
    }
}
