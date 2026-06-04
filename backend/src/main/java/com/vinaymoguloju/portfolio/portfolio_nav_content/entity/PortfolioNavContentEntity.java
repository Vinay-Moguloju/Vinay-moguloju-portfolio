package com.vinaymoguloju.portfolio.portfolio_nav_content.entity;

import com.vinaymoguloju.portfolio.portfolio_nav_content.dto.PortfolioNavSectionLinkResponse;
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
@Table(name = "portfolio_nav_content")
public class PortfolioNavContentEntity {

  @Column(name = "created_at", nullable = false)
  private Instant createdAt;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "nav_brand_name", nullable = false)
  private String navBrandName;

  @JdbcTypeCode(SqlTypes.JSON)
  @Column(name = "section_links", columnDefinition = "jsonb", nullable = false)
  private List<PortfolioNavSectionLinkResponse> sectionLinks;

  @Column(name = "updated_at", nullable = false)
  private Instant updatedAt;

  public Instant getCreatedAt() {
    return createdAt;
  }

  public Long getId() {
    return id;
  }

  public String getNavBrandName() {
    return navBrandName;
  }

  public List<PortfolioNavSectionLinkResponse> getSectionLinks() {
    return sectionLinks;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }
}
