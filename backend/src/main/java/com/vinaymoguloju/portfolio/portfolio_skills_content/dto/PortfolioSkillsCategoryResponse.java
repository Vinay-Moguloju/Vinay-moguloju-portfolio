package com.vinaymoguloju.portfolio.portfolio_skills_content.dto;

import java.util.List;

/**
 * Mirrors React: PORTFOLIO_SKILLS_CONTENT.categories[] item.
 */
public record PortfolioSkillsCategoryResponse(String name, List<PortfolioSkillLevelResponse> skills) {}
