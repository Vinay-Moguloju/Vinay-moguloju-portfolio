package com.vinaymoguloju.portfolio.portfolio_about_content.repository;

import com.vinaymoguloju.portfolio.portfolio_about_content.entity.PortfolioAboutContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioAboutContentRepository
    extends JpaRepository<PortfolioAboutContentEntity, Long> {

  Optional<PortfolioAboutContentEntity> findFirstByOrderByIdAsc();
}
