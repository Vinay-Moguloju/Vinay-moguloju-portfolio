package com.vinaymoguloju.portfolio.portfolio_skills_content.entity;

import com.vinaymoguloju.portfolio.portfolio_skills_content.dto.PortfolioSkillsCategoryResponse;
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
@Table(name = "portfolio_skills_content")
public class PortfolioSkillsContentEntity {

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb", nullable = false)
  private List<PortfolioSkillsCategoryResponse> categories;

  @Column(name = "comment_label", nullable = false)
  private String commentLabel;

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private String heading;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "section_label", nullable = false)
  private String sectionLabel;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(columnDefinition = "jsonb", nullable = false)
  private List<String> tools;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public List<PortfolioSkillsCategoryResponse> getCategories() {
    return categories;
  }

  public String getCommentLabel() {
    return commentLabel;
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

  public String getSectionLabel() {
    return sectionLabel;
  }

  public List<String> getTools() {
    return tools;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
