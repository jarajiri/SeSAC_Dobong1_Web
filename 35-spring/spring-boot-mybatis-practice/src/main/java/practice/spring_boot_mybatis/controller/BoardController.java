package practice.spring_boot_mybatis.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import practice.spring_boot_mybatis.dto.BoardDTO;
import practice.spring_boot_mybatis.dto.ResDTO;
import practice.spring_boot_mybatis.service.BoardService;

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
        Integer boardId;
        try {
            // ID 값을 숫자로 변환하여 유효성 검사
            boardId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
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
    public ResDTO insertBoard(
            @RequestBody BoardDTO boardDTO
    ) {
        // ResDTO resDTO = new ResDTO();
        boolean result;
        String msg;
        try {
            boardService.insertBoard(boardDTO);
            // resDTO.setResult(true);
            // resDTO.setMsg("insert board success");
            result = true;
            msg = "insert board success";
        } catch (Exception e) {
            // resDTO.setResult(false);
            // resDTO.setMsg("insert board failed :: " + e.getMessage());
            result = false;
            msg = "insert board failed :: " + e.getMessage();
        }
        return ResDTO.builder()
                .result(result)
                .msg(msg)
                .build();
    }


    // 게시글 수정
    @PatchMapping("/{id}")
    @ResponseBody
    public ResDTO updateBoard(
            @PathVariable String id,
            @RequestBody BoardDTO boardDTO
    ) throws Exception {
        Integer boardId;
        try {
            boardId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            throw new Exception("Invalid ID format: " + id);
        }
        String msg;
        boolean result;
        try {
            boardService.updateBoard(boardId, boardDTO);
            result = true;
            msg = "update board success";
        } catch (Exception e) {
            result = false;
            msg = "update board failed :: " + e.getMessage();
        }
        return ResDTO.builder()
                .result(result)
                .msg(msg)
                .build();
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    @ResponseBody
    public ResDTO deleteBoard(
            @PathVariable String id
    ) throws Exception {
        Integer boardId;
        try {
            boardId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            throw new Exception("Invalid ID format: " + id);
        }
        boolean result;
        String msg;
        try {
            boardService.deleteBoard(boardId);
            result = true;
            msg = "delete board success";
        } catch (Exception e) {
            result = false;
            msg = "delete board failed :: " + e.getMessage();
        }
        return ResDTO.builder()
                .result(result)
                .msg(msg)
                .build();
    }
}
