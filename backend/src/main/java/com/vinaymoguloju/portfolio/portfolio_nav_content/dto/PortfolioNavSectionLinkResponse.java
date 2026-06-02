package com.vinaymoguloju.portfolio.portfolio_nav_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mirrors React: PORTFOLIO_NAV_CONTENT.sectionLinks items ({ label, sectionId }).
 */
public record PortfolioNavSectionLinkResponse(
    String label,
    @JsonProperty("sectionId") String sectionId) {}
