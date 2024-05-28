package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.dto.DefaultResDTO;
import lecture.spring_boot_mybatis.service.BoardService;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@Slf4j
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public String getBoardList(Model model) {
        List<BoardDTO> boards = boardService.getBoards();
        model.addAttribute("boards", boards);
        return "board";
    }

    // builder 이용
    @PostMapping
    @ResponseBody
    public DefaultResDTO insertBoard(
            @RequestBody BoardCreateDTO boardCreateDTO
    ) {
        // Map<String, Boolean> result = new HashMap<>();
        boolean result = false;
        String errMsg = null;
        try {
            boardService.insertBoard(boardCreateDTO);
            result = true;
        } catch (Exception e) {
            errMsg = e.getMessage();
            log.error("insert board err {}", e.getMessage());
        }

        return DefaultResDTO.builder()
                .result(result)
                .errorMsg(errMsg)
                .build();
    }

    // setter 이용
    @PatchMapping("/{id}")
    @ResponseBody
    public DefaultResDTO updateBoard(
            @RequestBody BoardCreateDTO boardCreateDTO,
            @PathVariable int id
    ) {
        DefaultResDTO defaultResDTO = new DefaultResDTO();
        try {
            boardService.updateBoard(boardCreateDTO,id);
            defaultResDTO.setResult(true);
        } catch (Exception e) {
            defaultResDTO.setResult(false);
            defaultResDTO.setErrorMsg(e.getMessage());
            log.error("insert board err {}", e.getMessage());
        }

        return defaultResDTO;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public DefaultResDTO deleteBoard(
            @PathVariable int id
    ){
        DefaultResDTO defaultResDTO = new DefaultResDTO();
        try {
            boardService.deleteBoard(id);
            defaultResDTO.setResult(true);
        } catch (Exception e) {
            defaultResDTO.setResult(false);
            defaultResDTO.setErrorMsg(e.getMessage());
            log.error("delete board err {}", e.getMessage());
        }

        return defaultResDTO;
    }
}
