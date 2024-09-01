package com.vinyland.server.config;

import com.vinyland.server.entity.Genre;
import com.vinyland.server.entity.Vinyl;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

    HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST,
        HttpMethod.DELETE, HttpMethod.PATCH};

    // disable HTTP methods for ProductCategory: PUT, POST, DELETE and PATCH
    disableHttpMethods(Vinyl.class, config, theUnsupportedActions);
    disableHttpMethods(Genre.class, config, theUnsupportedActions);
 }


  private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
    config.getExposureConfiguration()
        .forDomainType(theClass)
        .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
        .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
  }
}