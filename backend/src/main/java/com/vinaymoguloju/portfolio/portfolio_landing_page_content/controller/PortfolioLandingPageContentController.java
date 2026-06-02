package com.vinaymoguloju.portfolio.portfolio_landing_page_content.controller;

import com.vinaymoguloju.portfolio.portfolio_landing_page_content.dto.PortfolioLandingPageContentResponse;
import com.vinaymoguloju.portfolio.portfolio_landing_page_content.service.PortfolioLandingPageContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-landing-page-content")
public class PortfolioLandingPageContentController {

  private final PortfolioLandingPageContentService portfolioLandingPageContentService;

  public PortfolioLandingPageContentController(
      PortfolioLandingPageContentService portfolioLandingPageContentService) {
    this.portfolioLandingPageContentService = portfolioLandingPageContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioLandingPageContentResponse> getPortfolioLandingPageContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(
        portfolioLandingPageContentService.fetchPortfolioLandingPageContent(id));
  }
}
