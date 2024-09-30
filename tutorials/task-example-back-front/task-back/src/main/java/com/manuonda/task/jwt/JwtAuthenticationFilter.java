package com.manuonda.task.jwt;

import java.io.IOException;
import java.util.Enumeration;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.manuonda.task.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
   
    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
      
         final String token = getTokenFromRequest(request);

         if(token == null){
            filterChain.doFilter(request, response);
            return;
         }

         String username = jwtService.getUsernameFromToken(token);
 
         if(username != null &&  SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            if(jwtService.isValidateToken(token, userDetails)){
                UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
  
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
                 
            }
         }
         filterChain.doFilter(request, response);
    
    }


    private String getTokenFromRequest(HttpServletRequest request){
        System.out.println(request.getHeader("Authorization"));
        Enumeration<String> headerNames = request.getHeaderNames();
        while(headerNames.hasMoreElements()){
            String headerName = headerNames.nextElement();
            System.out.println(headerName);
        }
        System.out.println(request.getHeaderNames());
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(StringUtils.isNotBlank(authHeader) && authHeader.startsWith("Bearer ")){
             return authHeader.substring(7);   
        }
        return null;
    }

}
