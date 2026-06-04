package com.vinaymoguloju.portfolio.portfolio_work_content.entity;

import com.vinaymoguloju.portfolio.portfolio_work_content.dto.PortfolioWorkActionLabelsResponse;
import com.vinaymoguloju.portfolio.portfolio_work_content.dto.PortfolioWorkProjectResponse;
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
@Table(name = "portfolio_work_content")
public class PortfolioWorkContentEntity {

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(name = "action_labels", columnDefinition = "jsonb", nullable = false)
  private PortfolioWorkActionLabelsResponse actionLabels;

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private String heading;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb", nullable = false)
  private List<PortfolioWorkProjectResponse> projects;

  @Column(name = "section_label", nullable = false)
  private String sectionLabel;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public PortfolioWorkActionLabelsResponse getActionLabels() {
    return actionLabels;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public String getHeading() {
    return heading;
  }

  public Long getId() {
    return id;
  }

  public List<PortfolioWorkProjectResponse> getProjects() {
    return projects;
  }

  public String getSectionLabel() {
    return sectionLabel;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
