package practice.spring_boot_jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import practice.spring_boot_jpa.entity.BoardEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity,Integer> {
    Optional<BoardEntity> findBoardEntityById(Integer id);
    List<BoardEntity> findBoardEntityByTitle(String search);
}
