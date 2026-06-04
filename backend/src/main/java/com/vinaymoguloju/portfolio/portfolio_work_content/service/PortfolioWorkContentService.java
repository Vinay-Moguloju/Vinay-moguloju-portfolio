package com.vinaymoguloju.portfolio.portfolio_work_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_work_content.dto.PortfolioWorkContentResponse;
import com.vinaymoguloju.portfolio.portfolio_work_content.entity.PortfolioWorkContentEntity;
import com.vinaymoguloju.portfolio.portfolio_work_content.repository.PortfolioWorkContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioWorkContentService {

  private static final String PORTFOLIO_WORK_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio work content was not found.";

  private final PortfolioWorkContentRepository portfolioWorkContentRepository;

  public PortfolioWorkContentService(
      PortfolioWorkContentRepository portfolioWorkContentRepository) {
    this.portfolioWorkContentRepository = portfolioWorkContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioWorkContentResponse fetchPortfolioWorkContent(Long portfolioWorkContentId) {
    PortfolioWorkContentEntity entity =
        portfolioWorkContentId == null
            ? portfolioWorkContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_WORK_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioWorkContentRepository
                .findById(portfolioWorkContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_WORK_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioWorkContentEntityToResponse(entity);
  }

  private PortfolioWorkContentResponse mapPortfolioWorkContentEntityToResponse(
      PortfolioWorkContentEntity entity) {
    return new PortfolioWorkContentResponse(
        entity.getActionLabels(),
        entity.getHeading(),
        entity.getProjects(),
        entity.getSectionLabel());
  }
}
