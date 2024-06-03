package springlecture.springbootsecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import springlecture.springbootsecurity.security.CustomAuthFilter;

import java.util.Arrays;

@Configuration // 스프링 설정 파일임을 알리는 어노테이션
@EnableWebSecurity // 해당 클래스에서 spring security 를 사용하기 위한 어노테이션
public class WebSecurityConfig {

    @Autowired
    private CustomAuthFilter customAuthFilter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        // 비밀번호 암호화 시 사용되는 메서드 정의
        return new BCryptPasswordEncoder();
    }

    @Bean // 메서드에 다는 어노테이션, 스프링 컨테이너가 관리할 수 있도록 등록
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 예외 처리를 필수로 진행할 수 있어야 함
        http
            .cors(Customizer.withDefaults()) // cors 설정 (react 서버에서 요청을 보낼 수 있도록 함)
            // .cors(cors-> cors.configurationSource()) : 메서드 명을 변경하고 싶을때
            // withDefaults() : Bean 으로 등록된 configurationSource 메서드를 찾아서 규칙대로 설정
            .csrf(CsrfConfigurer::disable) // 외부 post, put 요청을 허용하기 위함
            .logout(auth -> auth.logoutUrl("/auth/logout")
                // 로그아웃 요청 주소 설정
                // 자동으로 session, securityContext 등의 정보를 삭제함.
                .logoutSuccessHandler(((request, response, authentication) -> {
                    response.setStatus(200);
                })))
            .authorizeHttpRequests(authorize -> authorize
            .requestMatchers("/auth/**")
            .permitAll()
            .anyRequest().authenticated()); // 위의 요청주소를 제외한 모든 요청은 모두 인증을 필요로 함
            // permitAll() : 인증 X 접근 가능
            // hasRole("admin") : 특정 role 이 있어야 접근 가능 (ex. admin)
            // hasAnyRole("admin","teacher") : 파라미터로 넘긴 role 중 하나라도 만족하는지

        // 커스텀인증필터 추가
        http.addFilterBefore(customAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CorsConfigurationSource configurationSource(){
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("HEAD","POST","PATCH","DELETE","PUT","GET"));
        config.setAllowedHeaders(Arrays.asList("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",config);
        return source;
    }
}
