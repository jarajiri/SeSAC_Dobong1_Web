package lecture.springbootthymeleaf.Controller;

import lecture.springbootthymeleaf.Dto.Board;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BoardController {
    List<Board> list = new ArrayList<>();

    @GetMapping("/boards")
    public List<Board> getBoardAll(){
        return list;
    }

    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board){
        list.add(board);
        return board;
    }

    @PatchMapping("/board/{id}")
    public Board updateBoard(@PathVariable Integer id, @RequestBody Board board){
        for (Board existBoard : list) {
            if (existBoard.getBoardId().equals(id)) {
                existBoard.setTitle(board.getTitle());
                existBoard.setContent(board.getContent());
                existBoard.setWriter(board.getWriter());
                return existBoard;
            }
        }
        throw new RuntimeException("해당 글은 존재 하지 않습니다 : " + id);
    }

    @DeleteMapping("/board/{id}")
    public String deleteBoard(@PathVariable Integer id){
        for (Board existBoard : list) {
            if (existBoard.getBoardId().equals(id)) {
                list.remove(existBoard);
                return "해당 글을 삭제했습니다. " + id;
            }
        }
        throw new RuntimeException("해당 글은 존재 하지 않습니다 : " + id);
    }
}
