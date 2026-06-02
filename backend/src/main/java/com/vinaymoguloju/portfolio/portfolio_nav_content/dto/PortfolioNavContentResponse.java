package com.vinaymoguloju.portfolio.portfolio_nav_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_NAV_CONTENT.
 */
public record PortfolioNavContentResponse(
    @JsonProperty("hireMeLabel") String hireMeLabel,
    @JsonProperty("sectionLinks") List<PortfolioNavSectionLinkResponse> sectionLinks) {}
