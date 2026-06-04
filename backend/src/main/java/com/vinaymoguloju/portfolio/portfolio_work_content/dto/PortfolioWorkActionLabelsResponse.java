package com.vinaymoguloju.portfolio.portfolio_work_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mirrors React: PORTFOLIO_PROJECTS_CONTENT.actionLabels.
 */
public record PortfolioWorkActionLabelsResponse(
    @JsonProperty("caseStudy") String caseStudy,
    String code,
    String live) {}
