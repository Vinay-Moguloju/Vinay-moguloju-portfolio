package com.vinaymoguloju.portfolio.portfolio_contact_content.controller;

import com.vinaymoguloju.portfolio.portfolio_contact_content.dto.PortfolioContactContentResponse;
import com.vinaymoguloju.portfolio.portfolio_contact_content.service.PortfolioContactContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-contact-content")
public class PortfolioContactContentController {

  private final PortfolioContactContentService portfolioContactContentService;

  public PortfolioContactContentController(
      PortfolioContactContentService portfolioContactContentService) {
    this.portfolioContactContentService = portfolioContactContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioContactContentResponse> getPortfolioContactContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(portfolioContactContentService.fetchPortfolioContactContent(id));
  }
}
