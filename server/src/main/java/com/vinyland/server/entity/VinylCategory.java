package com.vinyland.server.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name="vinyl_category")
// @Data // set getters and setters
@Getter
@Setter

public class VinylCategory {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "category_name")
  private String categoryName;

  @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
  private Set<Vinyl> products;

}
