package com.bledi.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bledi.demo.model.ImageModel;

public interface ImageRepo extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}
