package com.vinaymoguloju.portfolio.portfolio_about_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_ABOUT_CONTENT.
 */
public record PortfolioAboutContentResponse(
    String heading,
    @JsonProperty("imageAlt") String imageAlt,
    List<String> paragraphs,
    @JsonProperty("sectionLabel") String sectionLabel,
    List<PortfolioAboutStatResponse> stats,
    @JsonProperty("statusChip") String statusChip) {}
