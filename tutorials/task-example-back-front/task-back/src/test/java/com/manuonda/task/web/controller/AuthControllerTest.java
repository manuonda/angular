package com.manuonda.task.web.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.apache.catalina.security.SecurityConfig;
import org.assertj.core.api.Assertions;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.manuonda.task.model.domain.Role;
import com.manuonda.task.model.dto.UserDTO;
import com.manuonda.task.model.entity.User;
import com.manuonda.task.service.AuthService;
import com.manuonda.task.service.JwtService;
import  com.manuonda.task.model.dto.AuthResponse;
import com.manuonda.task.model.dto.RegisterRequest;


@WebMvcTest(AuthController.class)
@Import(SecurityConfig.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthService authService;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

    private User user;
    private AuthResponse authResponse;

    @BeforeEach
    void init() {
        user = User.builder()
                .email("manuonda@gmail.com")
                .username("david")
                .lastname("garcia")
                .password("12345678")
                .role(Role.USER)
                .build();
    }

    @Test
    @Order(1)
    @DisplayName("Saved Usuario")
    void givenUsuario_whenRegisterUser_thenReturnObjectToken() throws Exception {
        // Given (Arrange)
        RegisterRequest registerRequest = new RegisterRequest("manuonda", "12345678", "david", "garcia", "manuonda@gmail.com");
        authResponse = new AuthResponse("token"); // Assuming correct type

        // Mockito behavior
        when(authService.registerUser(registerRequest)).thenReturn(authResponse);

        // When (Act)
        MvcResult mockMvcResult = mockMvc.perform(post("/api/v1/auth/register")  // Double-check path
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)))
                .andExpect(status().isOk())
                .andReturn();
                
        // Then (Assert)
        Assertions.assertThat(mockMvcResult.getResponse().getStatus()).isEqualTo(200);
    }

}
