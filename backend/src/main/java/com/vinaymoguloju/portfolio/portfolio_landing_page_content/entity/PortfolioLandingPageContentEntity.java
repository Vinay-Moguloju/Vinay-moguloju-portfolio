package com.vinaymoguloju.portfolio.portfolio_landing_page_content.entity;

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
@Table(name = "portfolio_landing_page_content")
public class PortfolioLandingPageContentEntity {

  @Column(name = "availability_badge", nullable = false)
  private String availabilityBadge;

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(name = "headline_accent", nullable = false)
  private String headlineAccent;

  @Column(name = "headline_muted", nullable = false)
  private String headlineMuted;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String intro;

  @Column(name = "primary_action_label", nullable = false)
  private String primaryActionLabel;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(name = "role_words", columnDefinition = "jsonb", nullable = false)
  private List<String> roleWords;

  @Column(name = "secondary_action_label", nullable = false)
  private String secondaryActionLabel;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public String getAvailabilityBadge() {
    return availabilityBadge;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public String getHeadlineAccent() {
    return headlineAccent;
  }

  public String getHeadlineMuted() {
    return headlineMuted;
  }

  public Long getId() {
    return id;
  }

  public String getIntro() {
    return intro;
  }

  public String getPrimaryActionLabel() {
    return primaryActionLabel;
  }

  public List<String> getRoleWords() {
    return roleWords;
  }

  public String getSecondaryActionLabel() {
    return secondaryActionLabel;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
