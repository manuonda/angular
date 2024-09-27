package com.manuonda.task.service;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.manuonda.task.model.domain.Role;
import com.manuonda.task.model.dto.AuthResponse;
import com.manuonda.task.model.dto.LoginRequest;
import com.manuonda.task.model.dto.RegisterRequest;
import com.manuonda.task.model.entity.User;
import com.manuonda.task.repository.IUserRepository;

@Service
public class AuthService {

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(IUserRepository userRepository,
            PasswordEncoder passwordEncoder, JwtService jwtService,
            AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthResponse login(LoginRequest request) {
        String token = null;
      
            UserDetails userDetails = this.userRepository.findByUsername(request.username())
                    .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.username(), request.password()));
            

            token = jwtService.getToken(userDetails);
     

        return new AuthResponse(token);
    }

    /**
     * @param userDTO
     * @return
     */
    public AuthResponse registerUser(RegisterRequest userDTO) {

        User user = this.toUser(userDTO);
        User newUser = this.userRepository.save(user);

        return new AuthResponse(this.jwtService.getToken(newUser));
    }

    private User toUser(RegisterRequest dto) {
        return User.builder()
                .username(dto.username())
                .lastname(dto.lastname())
                .password(passwordEncoder.encode(dto.password()))
                .role(Role.USER)
                .email(dto.email())
                .build();
    }

}