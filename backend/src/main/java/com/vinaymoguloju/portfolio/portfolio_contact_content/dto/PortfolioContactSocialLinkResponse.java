package com.vinaymoguloju.portfolio.portfolio_contact_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mirrors React: PORTFOLIO_CONTACT_CONTENT.socialLinks[] item.
 */
public record PortfolioContactSocialLinkResponse(
    String handle,
    String href,
    String label,
    @JsonProperty("profileKey") String profileKey) {}
