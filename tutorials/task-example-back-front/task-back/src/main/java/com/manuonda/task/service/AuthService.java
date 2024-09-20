package com.manuonda.task.service;

import org.springframework.stereotype.Service;

import com.manuonda.task.model.dto.AuthResponse;
import com.manuonda.task.model.dto.RegisterRequest;
import com.manuonda.task.model.entity.User;
import com.manuonda.task.repository.IUserRepository;


@Service
public class AuthService {

    private final IUserRepository userRepository;

    public AuthService(IUserRepository userRepository){
        this.userRepository = userRepository;
    }


    public AuthResponse registerUser(RegisterRequest userDTO){


        User user = this.toUser(userDTO);
        User newUser = this.userRepository.save(user);
        return this.toDTO;

    }



    public static User toUser(RegisterRequest dto){
        User user = User.builder()
        .username(dto.username())
        .build();
        return user;
    }
}