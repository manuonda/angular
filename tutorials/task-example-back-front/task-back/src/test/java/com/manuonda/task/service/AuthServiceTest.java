package com.manuonda.task.service;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.manuonda.task.repository.IUserRepository;


@ExtendWith(MockitoExtension.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AuthServiceTest {
    
    
    @Mock 
    private IUserRepository userRepository;

    @InjectMocks
    private AuthService authService;

    

    
    @Test
    void testFindAll() {

    }

    @Test
    void testLogin() {

    }

    @Test
    void testRegisterUser() {

    }
}
