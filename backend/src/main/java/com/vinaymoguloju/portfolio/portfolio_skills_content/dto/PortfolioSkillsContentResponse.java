package com.vinaymoguloju.portfolio.portfolio_skills_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_SKILLS_CONTENT.
 */
public record PortfolioSkillsContentResponse(
    List<PortfolioSkillsCategoryResponse> categories,
    @JsonProperty("commentLabel") String commentLabel,
    String heading,
    @JsonProperty("sectionLabel") String sectionLabel,
    List<String> tools) {}
