package com.manuonda.task.entity.dto;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
   @NotBlank(message = "Requierd Email") 
   String email, 
   @NotBlank(message = "Required Password")
   String password) {

}
