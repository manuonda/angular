package com.manuonda.task.model.dto;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(

   @NotBlank(message = "Requierd Username") 
   String username, 
   @NotBlank(message = "Required Password")
   String password,
   String firstname,
   String lastname,
   @NotBlank(message = "Required email")
   String email
   ) {

}
