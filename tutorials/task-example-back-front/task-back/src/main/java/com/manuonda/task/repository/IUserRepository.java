package com.manuonda.task.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.manuonda.task.model.entity.User;




public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    record UserDTO(Long id, String username, String password){};

    @Query("Select u from User u where u.id =:id")
    Optional<User> findUserById(Long id);
}
