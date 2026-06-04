package com.vinaymoguloju.portfolio.portfolio_contact_content.repository;

import com.vinaymoguloju.portfolio.portfolio_contact_content.entity.PortfolioContactContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioContactContentRepository
    extends JpaRepository<PortfolioContactContentEntity, Long> {

  Optional<PortfolioContactContentEntity> findFirstByOrderByIdAsc();
}
