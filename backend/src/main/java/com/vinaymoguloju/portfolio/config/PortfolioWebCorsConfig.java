package com.vinaymoguloju.portfolio.config;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class PortfolioWebCorsConfig {

  @Value("${portfolio.cors.allowed-origins}")
  private String portfolioCorsAllowedOrigins;

  @Bean
  public CorsConfigurationSource portfolioCorsConfigurationSource() {
    List<String> allowedOrigins = Arrays.stream(portfolioCorsAllowedOrigins.split(","))
        .map(String::trim)
        .filter((origin) -> !origin.isEmpty())
        .toList();

    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration.setAllowedHeaders(List.of("*"));
    corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "OPTIONS"));
    corsConfiguration.setAllowedOrigins(allowedOrigins);
    corsConfiguration.setAllowCredentials(true);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/api/**", corsConfiguration);
    return source;
  }
}
