package com.manuonda.task.service;

import org.springframework.stereotype.Service;

import com.manuonda.task.entity.dto.AuthResponse;
import com.manuonda.task.entity.dto.RegisterRequest;
import com.manuonda.task.entity.model.User;

@Service
public class AuthService {

    private final 


    public AuthResponse registerUser(RegisterRequest userDTO){

        User user = this.toUser(userDTO);
        return null;

    }

    public AuthResponse 


    public static User toUser(RegisterRequest dto){
        return new User(null, dto.email(), dto.password());
    }
}