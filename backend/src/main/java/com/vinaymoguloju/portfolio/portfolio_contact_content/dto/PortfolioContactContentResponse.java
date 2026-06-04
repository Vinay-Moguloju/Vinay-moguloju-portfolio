package com.vinaymoguloju.portfolio.portfolio_contact_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Mirrors React: PORTFOLIO_CONTACT_CONTENT.
 */
public record PortfolioContactContentResponse(
    @JsonProperty("footerCopyright") String footerCopyright,
    PortfolioContactFormResponse form,
    @JsonProperty("headingAccent") String headingAccent,
    @JsonProperty("headingPrimary") String headingPrimary,
    @JsonProperty("headingSuffix") String headingSuffix,
    String intro,
    @JsonProperty("sectionLabel") String sectionLabel,
    @JsonProperty("socialLinks") List<PortfolioContactSocialLinkResponse> socialLinks,
    @JsonProperty("successMessage") String successMessage,
    @JsonProperty("successTitle") String successTitle) {}
