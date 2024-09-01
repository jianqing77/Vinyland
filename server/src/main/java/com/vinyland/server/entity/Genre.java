package com.vinyland.server.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name="genre")
// @Data // set getters and setters
@Getter
@Setter

public class Genre {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "genre_name")
  private String genreName;

  @OneToMany(cascade = CascadeType.ALL, mappedBy = "genreCategory")
  private Set<Vinyl> vinyls;

}
