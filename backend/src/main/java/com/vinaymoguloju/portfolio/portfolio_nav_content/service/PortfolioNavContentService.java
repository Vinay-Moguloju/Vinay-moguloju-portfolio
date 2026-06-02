package com.vinaymoguloju.portfolio.portfolio_nav_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_nav_content.dto.PortfolioNavContentResponse;
import com.vinaymoguloju.portfolio.portfolio_nav_content.entity.PortfolioNavContentEntity;
import com.vinaymoguloju.portfolio.portfolio_nav_content.repository.PortfolioNavContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioNavContentService {

  private static final String PORTFOLIO_NAV_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio nav content was not found.";

  private final PortfolioNavContentRepository portfolioNavContentRepository;

  public PortfolioNavContentService(PortfolioNavContentRepository portfolioNavContentRepository) {
    this.portfolioNavContentRepository = portfolioNavContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioNavContentResponse fetchPortfolioNavContent(Long portfolioNavContentId) {
    PortfolioNavContentEntity entity =
        portfolioNavContentId == null
            ? portfolioNavContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_NAV_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioNavContentRepository
                .findById(portfolioNavContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_NAV_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioNavContentEntityToResponse(entity);
  }

  private PortfolioNavContentResponse mapPortfolioNavContentEntityToResponse(
      PortfolioNavContentEntity entity) {
    return new PortfolioNavContentResponse(entity.getHireMeLabel(), entity.getSectionLinks());
  }
}
