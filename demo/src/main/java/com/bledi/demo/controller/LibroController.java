package com.bledi.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.bledi.demo.model.*;
import com.bledi.demo.repository.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class LibroController {

	@Autowired
	LibroRepo LibroRepo;
	//@Autowired
	

	@GetMapping("/libro")
	public ResponseEntity<List<Libro>> getAllLibri(@RequestParam(required = false) String titolo) {
		try {
			List<Libro> libro = new ArrayList<Libro>();

			if (titolo == null)
				LibroRepo.findAll().forEach(libro::add);
			else
				LibroRepo.findByTitoloContaining(titolo).forEach(libro::add);

			if (libro.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(libro, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/libro/{id}")
	public ResponseEntity<Libro> getLibroById(@PathVariable("id") long id) {
		Optional<Libro> tutorialData = LibroRepo.findById(id);

		if (tutorialData.isPresent()) {
			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	

	@PostMapping("/libro")
	public ResponseEntity<Libro> createTutorial(@RequestBody Libro libri) {
		try {

			Libro libro = LibroRepo.save(libri);
			return new ResponseEntity<Libro>(libro, HttpStatus.CREATED);
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@PutMapping("/libro/{id}")
	public ResponseEntity<Libro> updateLibro(@PathVariable("id") long id, @RequestBody Libro libro) {
		Optional<Libro> Dati = LibroRepo.findById(id);

		if (Dati.isPresent()) {
			Libro _libro = Dati.get();
			_libro.setTitolo(libro.getTitolo());
			_libro.setDescrizione(libro.getDescrizione());
			_libro.setPrezzo(libro.getPrezzo());
			_libro.setAutore(libro.getAutore());
			return new ResponseEntity<>(LibroRepo.save(_libro), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}



	@DeleteMapping("/libro/{id}")
	public ResponseEntity<HttpStatus> deleteLibro(@PathVariable("id") long id) {
		try {
			LibroRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/libro")
	public ResponseEntity<HttpStatus> deleteAllLibro() {
		try {
			LibroRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}




}
