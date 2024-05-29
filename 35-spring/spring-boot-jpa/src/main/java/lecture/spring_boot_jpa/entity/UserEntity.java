package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity // 해당 클래스가 Entity임을 명시, 기본 생성자를 필요로 함
@Table(name = "user")
@Getter
@Builder // 모든 필드가 필요한 생성자가 필요함
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id // PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;

    @Column(name = "name", nullable = false, length = 200) // 실제 컬럼명, 널 허용 여부 false = not null
    private String name;

    @Column(name = "nickname", nullable = false, length = 200)
    private String nickname;
}
