package com.vinaymoguloju.portfolio.portfolio_landing_page_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_landing_page_content.dto.PortfolioLandingPageContentResponse;
import com.vinaymoguloju.portfolio.portfolio_landing_page_content.entity.PortfolioLandingPageContentEntity;
import com.vinaymoguloju.portfolio.portfolio_landing_page_content.repository.PortfolioLandingPageContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioLandingPageContentService {

  private static final String PORTFOLIO_LANDING_PAGE_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio landing page content was not found.";

  private final PortfolioLandingPageContentRepository portfolioLandingPageContentRepository;

  public PortfolioLandingPageContentService(
      PortfolioLandingPageContentRepository portfolioLandingPageContentRepository) {
    this.portfolioLandingPageContentRepository = portfolioLandingPageContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioLandingPageContentResponse fetchPortfolioLandingPageContent(
      Long portfolioLandingPageContentId) {
    PortfolioLandingPageContentEntity entity =
        portfolioLandingPageContentId == null
            ? portfolioLandingPageContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_LANDING_PAGE_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioLandingPageContentRepository
                .findById(portfolioLandingPageContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_LANDING_PAGE_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioLandingPageContentEntityToResponse(entity);
  }

  private PortfolioLandingPageContentResponse mapPortfolioLandingPageContentEntityToResponse(
      PortfolioLandingPageContentEntity entity) {
    return new PortfolioLandingPageContentResponse(
        entity.getAvailabilityBadge(),
        entity.getHeadlineAccent(),
        entity.getHeadlineMuted(),
        entity.getIntro(),
        entity.getPrimaryActionLabel(),
        entity.getRoleWords(),
        entity.getSecondaryActionLabel());
  }
}
