package com.vinaymoguloju.portfolio.portfolio_nav_content.controller;

import com.vinaymoguloju.portfolio.portfolio_nav_content.dto.PortfolioNavContentResponse;
import com.vinaymoguloju.portfolio.portfolio_nav_content.service.PortfolioNavContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-nav-content")
public class PortfolioNavContentController {

  private final PortfolioNavContentService portfolioNavContentService;

  public PortfolioNavContentController(PortfolioNavContentService portfolioNavContentService) {
    this.portfolioNavContentService = portfolioNavContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioNavContentResponse> getPortfolioNavContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(portfolioNavContentService.fetchPortfolioNavContent(id));
  }
}
