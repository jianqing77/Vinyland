package com.vinyland.server.dao;

import com.vinyland.server.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "genre", path = "genre")
public interface GenreRepository extends JpaRepository<Genre, Long> {
}
