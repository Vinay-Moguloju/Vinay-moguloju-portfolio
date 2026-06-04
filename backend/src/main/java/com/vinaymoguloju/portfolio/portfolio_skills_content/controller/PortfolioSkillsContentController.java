package com.vinaymoguloju.portfolio.portfolio_skills_content.controller;

import com.vinaymoguloju.portfolio.portfolio_skills_content.dto.PortfolioSkillsContentResponse;
import com.vinaymoguloju.portfolio.portfolio_skills_content.service.PortfolioSkillsContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio-skills-content")
public class PortfolioSkillsContentController {

  private final PortfolioSkillsContentService portfolioSkillsContentService;

  public PortfolioSkillsContentController(
      PortfolioSkillsContentService portfolioSkillsContentService) {
    this.portfolioSkillsContentService = portfolioSkillsContentService;
  }

  @GetMapping
  public ResponseEntity<PortfolioSkillsContentResponse> getPortfolioSkillsContent(
      @RequestParam(required = false) Long id) {
    return ResponseEntity.ok(portfolioSkillsContentService.fetchPortfolioSkillsContent(id));
  }
}
