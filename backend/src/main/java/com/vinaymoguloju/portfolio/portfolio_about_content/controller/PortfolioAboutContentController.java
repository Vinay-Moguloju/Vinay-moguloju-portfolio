package com.vinaymoguloju.portfolio.portfolio_about_content.controller;

import com.vinaymoguloju.portfolio.portfolio_about_content.dto.PortfolioAboutContentResponse;
import com.vinaymoguloju.portfolio.portfolio_about_content.service.PortfolioAboutContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-about-content")
public class PortfolioAboutContentController {

  private final PortfolioAboutContentService portfolioAboutContentService;

  public PortfolioAboutContentController(
      PortfolioAboutContentService portfolioAboutContentService) {
    this.portfolioAboutContentService = portfolioAboutContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioAboutContentResponse> getPortfolioAboutContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(portfolioAboutContentService.fetchPortfolioAboutContent(id));
  }
}
