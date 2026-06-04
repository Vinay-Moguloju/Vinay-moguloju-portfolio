package com.vinaymoguloju.portfolio.portfolio_skills_content.repository;

import com.vinaymoguloju.portfolio.portfolio_skills_content.entity.PortfolioSkillsContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioSkillsContentRepository
    extends JpaRepository<PortfolioSkillsContentEntity, Long> {

  Optional<PortfolioSkillsContentEntity> findFirstByOrderByIdAsc();
}
