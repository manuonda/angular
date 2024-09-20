package com.manuonda.task.model.dto;

public record AuthResponse(String token) {

    private void  validate(){
      System.out.println(this.token);  
    }
}
