package com.manuonda.task.model.dto;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(
   @NotBlank(message = "Requierd Email") 
   String email, 
   @NotBlank(message = "Required Password")
   String password) {

}
