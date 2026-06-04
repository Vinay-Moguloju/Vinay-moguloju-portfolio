package com.vinaymoguloju.portfolio.portfolio_about_content.entity;

import com.vinaymoguloju.portfolio.portfolio_about_content.dto.PortfolioAboutStatResponse;
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
@Table(name = "portfolio_about_content")
public class PortfolioAboutContentEntity {

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private String heading;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "image_alt", nullable = false)
  private String imageAlt;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb", nullable = false)
  private List<String> paragraphs;

  @Column(name = "section_label", nullable = false)
  private String sectionLabel;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb", nullable = false)
  private List<PortfolioAboutStatResponse> stats;

  @Column(name = "status_chip", nullable = false)
  private String statusChip;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public Instant getCreatedAt() {
    return createdAt;
  }

  public String getHeading() {
    return heading;
  }

  public Long getId() {
    return id;
  }

  public String getImageAlt() {
    return imageAlt;
  }

  public List<String> getParagraphs() {
    return paragraphs;
  }

  public String getSectionLabel() {
    return sectionLabel;
  }

  public List<PortfolioAboutStatResponse> getStats() {
    return stats;
  }

  public String getStatusChip() {
    return statusChip;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
