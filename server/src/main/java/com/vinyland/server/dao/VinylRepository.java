package com.vinyland.server.dao;

import com.vinyland.server.entity.Vinyl;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VinylRepository extends JpaRepository<Vinyl, Long> {
}
