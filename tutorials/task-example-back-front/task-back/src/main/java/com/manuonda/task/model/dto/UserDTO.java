package com.manuonda.task.model.dto;

import com.manuonda.task.model.domain.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record UserDTO(
     Long id,
    
    String email,
    String username,
    String lastname,
    @Enumerated(EnumType.STRING)
    Role role
) {

}
