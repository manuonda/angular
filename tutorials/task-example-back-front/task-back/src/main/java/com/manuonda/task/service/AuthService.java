package com.manuonda.task.service;

import org.hibernate.annotations.NotFound;
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
import com.manuonda.task.model.dto.UserDTO;
import com.manuonda.task.model.entity.User;
import com.manuonda.task.repository.IUserRepository;
import com.manuonda.task.web.exception.FoundException;
import com.manuonda.task.web.exception.NotFoundException;

import java.util.Optional;
import java.util.*;

@Service
public class AuthService {

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(IUserRepository userRepository,
            PasswordEncoder passwordEncoder, 
            JwtService jwtService,
            AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthResponse login(LoginRequest request) {
         String token = null;
         UserDetails userDetails = this.userRepository.findByUsername(request.username())
                    .orElseThrow(() -> new NotFoundException("Username not found"));
        //authentication user
        authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(request.username(), request.password()));
            token = jwtService.getToken(userDetails);
       
        return new AuthResponse(token);
    }

    /**
     * @param userDTO
     * @return
          * @throws Exception 
          */
         public AuthResponse registerUser(RegisterRequest userDTO){

        Optional<User> findUserByName = this.userRepository.findByUsername(userDTO.username());
        
        if(findUserByName.isPresent()){
          throw new FoundException("User already exists by Username");
        }

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

    private UserDTO toUserDTO(User user){
        return new UserDTO(user.getId(),user.getEmail(),user.getUsername(),user.getLastname(),
        user.getRole());
    }


    public List<UserDTO> findAll(UserDTO userDTO){
        List<UserDTO> users = this.userRepository.findAll().stream()
        .map(this::toUserDTO).toList();
        return users;
    }

}