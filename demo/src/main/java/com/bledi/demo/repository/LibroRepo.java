package com.bledi.demo.repository;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bledi.demo.model.*;

import java.util.List;

public interface LibroRepo extends JpaRepository<Libro, Long> {

  List<Libro> findByTitoloContaining(String titolo);
  //Optional<Libro> findByName(String nome);
}