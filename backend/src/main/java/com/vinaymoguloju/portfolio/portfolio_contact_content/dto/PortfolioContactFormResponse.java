package com.vinaymoguloju.portfolio.portfolio_contact_content.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mirrors React: PORTFOLIO_CONTACT_CONTENT.form.
 */
public record PortfolioContactFormResponse(
    @JsonProperty("emailLabel") String emailLabel,
    @JsonProperty("emailPlaceholder") String emailPlaceholder,
    @JsonProperty("messageLabel") String messageLabel,
    @JsonProperty("messagePlaceholder") String messagePlaceholder,
    @JsonProperty("nameLabel") String nameLabel,
    @JsonProperty("namePlaceholder") String namePlaceholder,
    @JsonProperty("submitLabel") String submitLabel,
    String title) {}
