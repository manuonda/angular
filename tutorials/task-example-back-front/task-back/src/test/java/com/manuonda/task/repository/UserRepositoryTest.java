package com.manuonda.task.repository;

import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.manuonda.task.model.entity.User;


@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserRepositoryTest {

    @Autowired
    private IUserRepository userRepository;


    User user;


    @BeforeEach
    void init(){
       user = User.builder()
       .email("manuonda@gmail.com")
       .lastname("garcia")
       .username("david")
       .password("12345678")
       .build();
    }


    @Test
    @Order(1)
    @DisplayName("Test Save User")
    void givenObjectUser_whenSaveUser_thenReturnObjectUser() {
       
      //given

      //when
      user = this.userRepository.save(user);
      
      //then        
      Assertions.assertThat(user).isNotNull();  
      Assertions.assertThat(user.getId()).isPositive();
    }
    

    @Test
    @Order(2)
    @DisplayName("Test find by Id")
    void givenNumber_whenFindById_thenReturnObjectUser(){
      //given 
      User userSaved = this.userRepository.save(this.user);
      //when 
      User findUser =  this.userRepository.findById(userSaved.getId()).get();

      //then 
      Assertions.assertThat(findUser.getUsername()).isEqualTo("david");
      Assertions.assertThat(findUser.getEmail()).isEqualTo("manuonda@gmail.com");

    }

    @Test
    @Order(3)
    @DisplayName("Update User Test")
    void givenObjectUser_whenUpdateUser_thenReturnObjectUser(){
     
        //given 
        User userSaved = this.userRepository.save(this.user);
        User findUser = this.userRepository.findById(userSaved.getId()).get();
        //when
        findUser.setEmail("andres@gmail.com");
        findUser.setUsername("andres23");
        this.userRepository.save(findUser);
        
        //then
        Assertions.assertThat(findUser.getEmail()).isEqualTo("andres@gmail.com");

    }

    @Test
    @Order(4)
    @DisplayName("Delete user")
    void givenUserId_whenDeteleUser_thenReturnEmpty(){
        //given 
        User userSaved =this.userRepository.save(this.user);
        //when 
        this.userRepository.delete(userSaved);
        Optional<User> optionalUser = this.userRepository.findById(userSaved.getId());

        //then 
        Assertions.assertThat(optionalUser).isEmpty();
    }

    @Test
    @Order(5)
    @DisplayName("Get all users")
    void giveListUsers_whenFindUsers_ReturnListObject(){
        //given 
        User userOne = User.builder()
        .email("manuonda@gmail.com")
        .username("david")
        .lastname("garcia")
        .build();
        this.userRepository.save(userOne);
    
        User userTwo = User.builder()
        .email("manuonda32@gmail.com")
        .username("andres")
        .lastname("garcia")
        .build();
        this.userRepository.save(userTwo);

        //when 
        List<User> users = this.userRepository.findAll();

        //then 
        Assertions.assertThat(users).isNotEmpty();
        Assertions.assertThat(users.size()).isEqualTo(2);
    }

}
