package com.manuonda.task.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manuonda.task.model.dto.UserDTO;
import com.manuonda.task.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@Tag(name="User Controller", description="User Controllers")
public class UserController {

    private final AuthService authService;

    public UserController(AuthService authService){
        this.authService = authService;
    }



    @GetMapping
    @Operation(summary ="Get all users")
    @ApiResponse(responseCode ="2O0", description ="Response status 200")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = this.authService.findAll(null);
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }    

}
