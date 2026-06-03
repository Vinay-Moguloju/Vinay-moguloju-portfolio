package com.vinaymoguloju.portfolio.config;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Enables CORS for the React dev server and GitHub Pages origin.
 * Without this, browsers show failed requests even when the API returns 200.
 */
@Configuration
public class PortfolioWebCorsConfig implements WebMvcConfigurer {

  @Value("${portfolio.cors.allowed-origins}")
  private String portfolioCorsAllowedOrigins;

  @Override
  public void addCorsMappings(CorsRegistry corsRegistry) {
    String[] allowedOrigins =
        Arrays.stream(portfolioCorsAllowedOrigins.split(","))
            .map(String::trim)
            .filter((origin) -> !origin.isEmpty())
            .toArray(String[]::new);

    corsRegistry
        .addMapping("/api/**")
        .allowedHeaders("*")
        .allowedMethods("GET", "POST", "PUT", "OPTIONS")
        .allowedOrigins(allowedOrigins)
        .allowCredentials(true);
  }
}
