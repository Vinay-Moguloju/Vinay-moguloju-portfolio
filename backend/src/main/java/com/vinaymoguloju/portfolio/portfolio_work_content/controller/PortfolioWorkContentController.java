package com.vinaymoguloju.portfolio.portfolio_work_content.controller;

import com.vinaymoguloju.portfolio.portfolio_work_content.dto.PortfolioWorkContentResponse;
import com.vinaymoguloju.portfolio.portfolio_work_content.service.PortfolioWorkContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-work-content")
public class PortfolioWorkContentController {

  private final PortfolioWorkContentService portfolioWorkContentService;

  public PortfolioWorkContentController(PortfolioWorkContentService portfolioWorkContentService) {
    this.portfolioWorkContentService = portfolioWorkContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioWorkContentResponse> getPortfolioWorkContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(portfolioWorkContentService.fetchPortfolioWorkContent(id));
  }
}
