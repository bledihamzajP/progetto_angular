package com.bledi.demo.model;

import java.math.BigDecimal;

import javax.persistence.*;

//import org.hibernate.type.descriptor.sql.VarbinaryTypeDescriptor;

@Entity
@Table(name = "Libro")
public class Libro {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "titolo")
	private String titolo;

	@Column(name = "descrizione")
	private String descrizione;

	@Column(name = "prezzo")
	private BigDecimal prezzo;

	@Column(name = "autore")
	private String autore;





	public Libro() {

	}


	public Libro(String titolo, String descrizione,BigDecimal prezzo,String autore) {
		this.titolo = titolo;
		this.descrizione = descrizione;
		this.prezzo = prezzo;
		this.autore = autore;
		
		
	}
	

	public long getId() {
		return id;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}


	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}



	public BigDecimal getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(BigDecimal prezzo) {
		this.prezzo = prezzo;
	}

	



}
