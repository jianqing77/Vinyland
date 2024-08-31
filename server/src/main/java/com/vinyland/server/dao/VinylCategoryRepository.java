package com.vinyland.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "vinylCategory", path = "vinyl-category")
public interface VinylCategoryRepository extends JpaRepository<VinylRepository, Long> {
}
