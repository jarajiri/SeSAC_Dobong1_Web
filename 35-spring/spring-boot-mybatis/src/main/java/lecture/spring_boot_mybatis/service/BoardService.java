package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDTO> getBoards(){
        List<BoardDTO> boardDTOList = new ArrayList<>();
        List<Board> result = boardMapper.getBoardsAll();
        for (int i = 0; i < result.size(); i++) {
            //  Setter를 이용한 version
            // BoardDTO boardDTO = new BoardDTO();
            // boardDTO.setId(result.get(i).getId());
            // boardDTO.setTitle(result.get(i).getTitle());
            // boardDTO.setContent(result.get(i).getContent());
            // boardDTO.setWriter(result.get(i).getWriter());
            // boardDTO.setRegistered(result.get(i).getRegistered());
            // boardDTO.setNo(result.get(i).getWriter()+(i+1));
            //
            // boardDTOList.add(boardDTO);

            // Builder 패턴 이용한 version
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .content(result.get(i).getContent())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .no(result.get(i).getWriter()+(i+1))
                    .build();
            boardDTOList.add(boardDTO);
        }
        return boardDTOList;
    }

    public void insertBoard(BoardCreateDTO boardCreateDTO){
        boardMapper.insertBoard(boardCreateDTO);
    }

    public void updateBoard(BoardCreateDTO boardCreateDTO, int id){
        Board updateBoard = Board.builder()
                .id(id)
                .title(boardCreateDTO.getTitle())
                .content(boardCreateDTO.getContent())
                .writer(boardCreateDTO.getWriter())
                .build();
        boardMapper.updateBoard(updateBoard);
    }

    public void deleteBoard(int id) {
        boardMapper.deleteBoard(id);
    }
}
