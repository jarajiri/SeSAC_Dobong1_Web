package practice.spring_boot_jpa.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import practice.spring_boot_jpa.dto.BoardDTO;
import practice.spring_boot_jpa.dto.ResDTO;
import practice.spring_boot_jpa.service.BoardService;

import java.util.List;


@Controller
@ControllerAdvice
@RequestMapping("/board")
@Slf4j
public class BoardController {

    @Autowired
    private BoardService boardService;

    @ExceptionHandler
    public String errHandler(Exception e) {
        log.error(e.getMessage());
        return "error";
    }

    // 게시글 조회
    @GetMapping
    public String getBoard(
        @RequestParam(required = false) String search,
        Model model
    ) {
        // 제목으로 조회시, 전체 조회 분기
        List<BoardDTO> boards = (search != null && !search.isEmpty()) ?
            boardService.getBoardSearch(search) :
            boardService.getBoardAll();
        model.addAttribute("boards", boards);
        return "board";
    }

    // 게시글 상세보기
    @GetMapping("/{id}")
    public String getBoardOne(
        @PathVariable String id,
        Model model
    ) throws Exception {
        int boardId;
        try {
            // ID 값을 숫자로 변환하여 유효성 검사
            boardId = Integer.parseInt(id);
        } catch (Exception e) {
            // 예외 발생시 기존 예외처리 핸들러로 처리
            throw new Exception("Invalid ID format: " + id);
        }

        BoardDTO boardDetail = boardService.getBoardOne(boardId);
        model.addAttribute("boardDetail", boardDetail);
        return "boardDetail";
    }


    // 게시글 작성
    @PostMapping
    @ResponseBody
    public ResponseEntity<ResDTO> insertBoard(
        @RequestBody BoardDTO boardDTO
    ) {
        try {
            boardService.insertBoard(boardDTO);
            return ResponseEntity.ok(
                ResDTO.builder()
                    .msg("insert board success")
                    .result(true)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResDTO.builder()
                    .msg("insert board failed :: " + e.getMessage())
                    .result(false).build());
        }
    }


    // 게시글 수정
    @PatchMapping("/{id}")
    @ResponseBody
    public ResponseEntity<ResDTO> updateBoard(
        @PathVariable String id,
        @RequestBody BoardDTO boardDTO
    ) {
        try {
            int boardId = Integer.parseInt(id);
            boardService.updateBoard(boardId, boardDTO);
            return ResponseEntity.ok(
                ResDTO.builder()
                    .msg("insert board success")
                    .result(true)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResDTO.builder()
                    .msg("insert board failed :: " + e.getMessage())
                    .result(false)
                    .build());
        }
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<ResDTO> deleteBoard(
        @PathVariable String id
    ) {
        try {
            int boardId = Integer.parseInt(id);
            boardService.deleteBoard(boardId);
            return ResponseEntity.ok(
                ResDTO.builder()
                    .msg("delete board success")
                    .result(true)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResDTO.builder()
                    .msg("delete board failed :: " + e.getMessage())
                    .result(false)
                    .build());
        }
    }
}
