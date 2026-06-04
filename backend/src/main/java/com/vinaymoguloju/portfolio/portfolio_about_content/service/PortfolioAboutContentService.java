package com.vinaymoguloju.portfolio.portfolio_about_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_about_content.dto.PortfolioAboutContentResponse;
import com.vinaymoguloju.portfolio.portfolio_about_content.entity.PortfolioAboutContentEntity;
import com.vinaymoguloju.portfolio.portfolio_about_content.repository.PortfolioAboutContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioAboutContentService {

  private static final String PORTFOLIO_ABOUT_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio about content was not found.";

  private final PortfolioAboutContentRepository portfolioAboutContentRepository;

  public PortfolioAboutContentService(
      PortfolioAboutContentRepository portfolioAboutContentRepository) {
    this.portfolioAboutContentRepository = portfolioAboutContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioAboutContentResponse fetchPortfolioAboutContent(Long portfolioAboutContentId) {
    PortfolioAboutContentEntity entity =
        portfolioAboutContentId == null
            ? portfolioAboutContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_ABOUT_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioAboutContentRepository
                .findById(portfolioAboutContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_ABOUT_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioAboutContentEntityToResponse(entity);
  }

  private PortfolioAboutContentResponse mapPortfolioAboutContentEntityToResponse(
      PortfolioAboutContentEntity entity) {
    return new PortfolioAboutContentResponse(
        entity.getHeading(),
        entity.getImageAlt(),
        entity.getParagraphs(),
        entity.getSectionLabel(),
        entity.getStats(),
        entity.getStatusChip());
  }
}
