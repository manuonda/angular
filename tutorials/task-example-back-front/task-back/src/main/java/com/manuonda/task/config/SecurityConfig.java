package com.manuonda.task.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
       return  http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests( authRequest
           -> authRequest
           .requestMatchers("/api/v1/auth/sign-in").permitAll()
           .requestMatchers("/swagger-ui/**").permitAll()
           .anyRequest().authenticated()
           )
           .formLogin(withDefaults())
           .build();
         
        
    }
}
