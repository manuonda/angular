package com.manuonda.task.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.manuonda.task.entity.entiti2.User;


@RepositoryRestResource(collectionResourceRel = "users", path="users")
public interface IUserRepository extends JpaRepository<User, Long> {


    record UserDTO(Long id, String username, String password){};

    @RestResource(path="findById", rel="custom")
    @Query("Select u from User u where u.id =:id")
    Optional<User> findUserById(Long id);
}
