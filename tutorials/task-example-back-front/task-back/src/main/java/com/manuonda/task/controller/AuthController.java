package com.manuonda.task.controller;

import org.springframework.context.annotation.Description;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manuonda.task.model.dto.AuthResponse;
import com.manuonda.task.model.dto.LoginRequest;
import com.manuonda.task.model.dto.RegisterRequest;
import com.manuonda.task.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "Register User")
    @ApiResponse(responseCode = "200", description = "Response Status 200")
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody RegisterRequest dto ) {
        return  ResponseEntity.status(HttpStatus.OK).body(this.authService.registerUser(dto));
    }


    @Operation(summary = "Login User")
    @ApiResponse(responseCode = "200", description="Response Status 200")
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest login) {
        return ResponseEntity.status(HttpStatus.OK).body(this.authService.login(login));
    }
    
    
}
