package com.manuonda.task.model.dto;

import com.manuonda.task.model.domain.Role;



public record UserDTO(
     Long id,
    String email,
    String username,
    String lastname,
    Role role
) {

}
