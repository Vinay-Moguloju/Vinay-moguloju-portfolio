package com.vinaymoguloju.portfolio.portfolio_nav_content.repository;

import com.vinaymoguloju.portfolio.portfolio_nav_content.entity.PortfolioNavContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioNavContentRepository extends JpaRepository<PortfolioNavContentEntity, Long> {

  Optional<PortfolioNavContentEntity> findFirstByOrderByIdAsc();
}
