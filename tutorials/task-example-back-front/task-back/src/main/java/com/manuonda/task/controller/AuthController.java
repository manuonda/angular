package com.manuonda.task.controller;

import org.springframework.context.annotation.Description;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manuonda.task.entity.dto.RegisterRequest;
import com.manuonda.task.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RequestMapping("/api/v1/auth")
@RestController
@Tag(name = "Authentication Controller",  description = "Authentication Controller")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @Operation(summary = "")
    @PostMapping("register")
    public ResponseEntity<RegisterRequest> postMethodName(@RequestBody RegisterRequest dto ) {
          
        return null;
    }
    
}
