package com.manuonda.task.web.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
public class GlobalException extends RuntimeException{


    @ExceptionHandler(UsernameNotFoundException.class)
    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    public ResponseEntity<ProblemDetail> handleUsernameNotFoundException(UsernameNotFoundException ex){
        log.info("handleUsernameNotFoundException {}", ex.getMessage());
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, getLocalizedMessage());
        problemDetail.setTitle("Usuario/ Password Incorrect");
        problemDetail.setStatus(403);
        problemDetail.setDetail(ex.getLocalizedMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problemDetail);
    }

    @ExceptionHandler(FoundException.class)
    public ResponseEntity<ProblemDetail> handleFoundException(FoundException ex){
        log.info("handleFoundException {}", ex.getMessage());
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.FOUND, getLocalizedMessage());
        problemDetail.setTitle("El recurso ya existe");
        problemDetail.setStatus(403);
        problemDetail.setDetail(ex.getLocalizedMessage());
        return ResponseEntity.status(HttpStatus.FOUND).body(problemDetail);
    }
}
