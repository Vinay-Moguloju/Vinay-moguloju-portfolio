package com.vinaymoguloju.portfolio.portfolio_work_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_PROJECTS_CONTENT.projects[] item.
 */
public record PortfolioWorkProjectResponse(
    @JsonProperty("accentColorKey") String accentColorKey,
    String category,
    String description,
    Long id,
    @JsonProperty("imageUrl") String imageUrl,
    List<String> stack,
    String tagline,
    String title,
    String year) {}
