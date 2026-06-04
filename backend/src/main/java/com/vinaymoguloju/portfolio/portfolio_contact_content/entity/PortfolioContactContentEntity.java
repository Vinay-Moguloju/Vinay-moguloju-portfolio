package com.vinaymoguloju.portfolio.portfolio_contact_content.entity;

import com.vinaymoguloju.portfolio.portfolio_contact_content.dto.PortfolioContactFormResponse;
import com.vinaymoguloju.portfolio.portfolio_contact_content.dto.PortfolioContactSocialLinkResponse;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.Instant;
import java.util.List;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "portfolio_contact_content")
public class PortfolioContactContentEntity {

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(name = "footer_copyright", nullable = false)
  private String footerCopyright;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(name = "form_fields", columnDefinition = "jsonb", nullable = false)
  private PortfolioContactFormResponse formFields;

  @Column(name = "heading_accent", nullable = false)
  private String headingAccent;

  @Column(name = "heading_primary", nullable = false)
  private String headingPrimary;

  @Column(name = "heading_suffix", nullable = false)
  private String headingSuffix;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String intro;

  @Column(name = "section_label", nullable = false)
  private String sectionLabel;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(name = "social_links", columnDefinition = "jsonb", nullable = false)
  private List<PortfolioContactSocialLinkResponse> socialLinks;

  @Column(name = "success_message", nullable = false)
  private String successMessage;

  @Column(name = "success_title", nullable = false)
  private String successTitle;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public Instant getCreatedAt() {
    return createdAt;
  }

  public String getFooterCopyright() {
    return footerCopyright;
  }

  public PortfolioContactFormResponse getFormFields() {
    return formFields;
  }

  public String getHeadingAccent() {
    return headingAccent;
  }

  public String getHeadingPrimary() {
    return headingPrimary;
  }

  public String getHeadingSuffix() {
    return headingSuffix;
  }

  public Long getId() {
    return id;
  }

  public String getIntro() {
    return intro;
  }

  public String getSectionLabel() {
    return sectionLabel;
  }

  public List<PortfolioContactSocialLinkResponse> getSocialLinks() {
    return socialLinks;
  }

  public String getSuccessMessage() {
    return successMessage;
  }

  public String getSuccessTitle() {
    return successTitle;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
