package com.vinyland.server.dao;

import com.vinyland.server.entity.Vinyl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface VinylRepository extends JpaRepository<Vinyl, Long> {
}
