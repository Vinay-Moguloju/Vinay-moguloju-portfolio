package com.vinaymoguloju.portfolio.portfolio_work_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_PROJECTS_CONTENT.
 */
public record PortfolioWorkContentResponse(
    @JsonProperty("actionLabels") PortfolioWorkActionLabelsResponse actionLabels,
    String heading,
    List<PortfolioWorkProjectResponse> projects,
    @JsonProperty("sectionLabel") String sectionLabel) {}
