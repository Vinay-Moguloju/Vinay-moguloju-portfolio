package com.vinaymoguloju.portfolio.common.exception;

import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class PortfolioRestExceptionHandler {

  @ExceptionHandler(PortfolioResourceNotFoundException.class)
  public ResponseEntity<Map<String, String>> handlePortfolioResourceNotFound(
      PortfolioResourceNotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(Map.of("message", exception.getMessage()));
  }
}
