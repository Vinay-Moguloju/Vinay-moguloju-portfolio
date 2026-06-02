package com.vinaymoguloju.portfolio.portfolio_landing_page_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_LANDING_PAGE_CONTENT.
 */
public record PortfolioLandingPageContentResponse(
    @JsonProperty("availabilityBadge") String availabilityBadge,
    @JsonProperty("headlineAccent") String headlineAccent,
    @JsonProperty("headlineMuted") String headlineMuted,
    String intro,
    @JsonProperty("primaryActionLabel") String primaryActionLabel,
    @JsonProperty("roleWords") List<String> roleWords,
    @JsonProperty("secondaryActionLabel") String secondaryActionLabel) {}
