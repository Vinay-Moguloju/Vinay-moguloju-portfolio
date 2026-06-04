package com.vinaymoguloju.portfolio.portfolio_work_content.repository;

import com.vinaymoguloju.portfolio.portfolio_work_content.entity.PortfolioWorkContentEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioWorkContentRepository
    extends JpaRepository<PortfolioWorkContentEntity, Long> {

  Optional<PortfolioWorkContentEntity> findFirstByOrderByIdAsc();
}
