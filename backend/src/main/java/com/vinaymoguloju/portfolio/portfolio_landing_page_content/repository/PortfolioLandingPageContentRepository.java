package com.vinaymoguloju.portfolio.portfolio_landing_page_content.repository;

import com.vinaymoguloju.portfolio.portfolio_landing_page_content.entity.PortfolioLandingPageContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioLandingPageContentRepository
    extends JpaRepository<PortfolioLandingPageContentEntity, Long> {

  Optional<PortfolioLandingPageContentEntity> findFirstByOrderByIdAsc();
}
