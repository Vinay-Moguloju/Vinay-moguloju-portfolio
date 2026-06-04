package com.vinaymoguloju.portfolio.portfolio_skills_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_skills_content.dto.PortfolioSkillsContentResponse;
import com.vinaymoguloju.portfolio.portfolio_skills_content.entity.PortfolioSkillsContentEntity;
import com.vinaymoguloju.portfolio.portfolio_skills_content.repository.PortfolioSkillsContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioSkillsContentService {

  private static final String PORTFOLIO_SKILLS_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio skills content was not found.";

  private final PortfolioSkillsContentRepository portfolioSkillsContentRepository;

  public PortfolioSkillsContentService(
      PortfolioSkillsContentRepository portfolioSkillsContentRepository) {
    this.portfolioSkillsContentRepository = portfolioSkillsContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioSkillsContentResponse fetchPortfolioSkillsContent(
      Long portfolioSkillsContentId) {
    PortfolioSkillsContentEntity entity =
        portfolioSkillsContentId == null
            ? portfolioSkillsContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_SKILLS_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioSkillsContentRepository
                .findById(portfolioSkillsContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_SKILLS_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioSkillsContentEntityToResponse(entity);
  }

  private PortfolioSkillsContentResponse mapPortfolioSkillsContentEntityToResponse(
      PortfolioSkillsContentEntity entity) {
    return new PortfolioSkillsContentResponse(
        entity.getCategories(),
        entity.getCommentLabel(),
        entity.getHeading(),
        entity.getSectionLabel(),
        entity.getTools());
  }
}
