package com.vinaymoguloju.portfolio.portfolio_contact_content.service;

import com.vinaymoguloju.portfolio.common.exception.PortfolioResourceNotFoundException;
import com.vinaymoguloju.portfolio.portfolio_contact_content.dto.PortfolioContactContentResponse;
import com.vinaymoguloju.portfolio.portfolio_contact_content.entity.PortfolioContactContentEntity;
import com.vinaymoguloju.portfolio.portfolio_contact_content.repository.PortfolioContactContentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PortfolioContactContentService {

  private static final String PORTFOLIO_CONTACT_CONTENT_NOT_FOUND_MESSAGE =
      "Portfolio contact content was not found.";

  private final PortfolioContactContentRepository portfolioContactContentRepository;

  public PortfolioContactContentService(
      PortfolioContactContentRepository portfolioContactContentRepository) {
    this.portfolioContactContentRepository = portfolioContactContentRepository;
  }

  @Transactional(readOnly = true)
  public PortfolioContactContentResponse fetchPortfolioContactContent(
      Long portfolioContactContentId) {
    PortfolioContactContentEntity entity =
        portfolioContactContentId == null
            ? portfolioContactContentRepository
                .findFirstByOrderByIdAsc()
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_CONTACT_CONTENT_NOT_FOUND_MESSAGE))
            : portfolioContactContentRepository
                .findById(portfolioContactContentId)
                .orElseThrow(
                    () ->
                        new PortfolioResourceNotFoundException(
                            PORTFOLIO_CONTACT_CONTENT_NOT_FOUND_MESSAGE));

    return mapPortfolioContactContentEntityToResponse(entity);
  }

  private PortfolioContactContentResponse mapPortfolioContactContentEntityToResponse(
      PortfolioContactContentEntity entity) {
    return new PortfolioContactContentResponse(
        entity.getFooterCopyright(),
        entity.getFormFields(),
        entity.getHeadingAccent(),
        entity.getHeadingPrimary(),
        entity.getHeadingSuffix(),
        entity.getIntro(),
        entity.getSectionLabel(),
        entity.getSocialLinks(),
        entity.getSuccessMessage(),
        entity.getSuccessTitle());
  }
}
