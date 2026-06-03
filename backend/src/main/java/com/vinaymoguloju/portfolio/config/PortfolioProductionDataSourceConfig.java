package com.vinaymoguloju.portfolio.config;

import javax.sql.DataSource;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;

/**
 * Binds cloud Postgres on Render/Railway via DATABASE_URL or SPRING_DATASOURCE_* env vars.
 */
@Configuration
@Profile("production")
public class PortfolioProductionDataSourceConfig {

  @Bean
  @Primary
  public DataSource portfolioProductionDataSource(Environment environment) {
    DataSourceProperties dataSourceProperties = new DataSourceProperties();

    String springDatasourceUrl = environment.getProperty("SPRING_DATASOURCE_URL", "").trim();
    if (!springDatasourceUrl.isEmpty()) {
      dataSourceProperties.setUrl(springDatasourceUrl);
      dataSourceProperties.setUsername(environment.getProperty("SPRING_DATASOURCE_USERNAME", ""));
      dataSourceProperties.setPassword(environment.getProperty("SPRING_DATASOURCE_PASSWORD", ""));
      return dataSourceProperties.initializeDataSourceBuilder().build();
    }

    String databaseUrl = environment.getProperty("DATABASE_URL", "").trim();
    if (databaseUrl.isEmpty()) {
      throw new IllegalStateException(
          "Production requires SPRING_DATASOURCE_URL or DATABASE_URL (link Postgres on Render/Railway).");
    }

    dataSourceProperties.setUrl(convertPostgresUrlToJdbc(databaseUrl));
    return dataSourceProperties.initializeDataSourceBuilder().build();
  }

  private String convertPostgresUrlToJdbc(String databaseUrl) {
    if (databaseUrl.startsWith("jdbc:")) {
      return databaseUrl;
    }

    if (databaseUrl.startsWith("postgres://")) {
      return "jdbc:postgresql://" + databaseUrl.substring("postgres://".length());
    }

    if (databaseUrl.startsWith("postgresql://")) {
      return "jdbc:" + databaseUrl;
    }

    throw new IllegalStateException("Unsupported DATABASE_URL format for portfolio backend.");
  }
}
