package com.manuonda.task.entity.dto;

public record AuthResponse(String token) {

    private void  validate(){
      System.out.println(this.token);  
    }
}
