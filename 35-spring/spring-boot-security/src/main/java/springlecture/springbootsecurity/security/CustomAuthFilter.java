package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // 클래스에 해당 어노테이션을 작성시 스프링 컨테이너에서 관리 가능
@Slf4j
public class CustomAuthFilter extends OncePerRequestFilter { // 요청당 한번 거치는 필터, 추상클래스라서 오버라이딩 필요
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            HttpSession session = request.getSession();
            Object userId = session.getAttribute("userId");

            log.warn("filter session check {} {}", session.getId(), userId);


            if (userId != null) {
                // user id가 있을 경우 -> 로그인 상태
                // 1. 토큰을 생성(UserName~~Auth Token)해서
                Authentication authentication = new UsernamePasswordAuthenticationToken(
                    String.valueOf(userId),
                    null,
                    AuthorityUtils.NO_AUTHORITIES);
                // 2. SecurityContextHolder 에 담아 컨트롤러까지 도달할 수 있도록
                SecurityContextHolder.getContext().setAuthentication(authentication);
                // SecurityContextHolder : 현재 요청에 유효한 공간
            }
        } catch (Exception e) {
            // 그렇지 않을 경우 -> 예외 발생
            log.error("no Authentication");

        }

        // 다음 필터 실행
        filterChain.doFilter(request, response);
    }
}
