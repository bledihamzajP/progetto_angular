import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libri } from '../../models/libri.model';
import { LibriService } from '../../services/libri.service';


@Component({
  selector: 'app-add-libri',
  templateUrl: './add-libri.component.html',
  styleUrls: ['./add-libri.component.css']
})
export class AddLibriComponent implements OnInit{



  constructor(private LibriService: LibriService,private httpClient: HttpClient) { }
  ngOnInit(): void {
   
    
  }
  invio = false;

/**
 * inizializzazione del oggetto libro
 */
  libro: Libri = {
    titolo: '',
    descrizione: "",
    prezzo: '',
    autore:''
  };
/**
 * All'interno della funzione viene creato un nuovo oggetto data che contiene le proprietà per elemento dall'oggetto this.libro
 * 
 *  il LibriService.create()metodo viene chiamato per inviare la richiesta HTTP POST al server.
 * 
 */
  salvaLibro(): void {
    const data = {
      titolo: this.libro.titolo,
      descrizione: this.libro.descrizione,
      prezzo: this.libro.prezzo,
      autore: this.libro.autore
    };
    this.LibriService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.invio = true;
        },
        error: (e) => console.error(e)
      });
  }



  /**
   * una funzione che reimposta il modulo per l'aggiunta di un nuovo libro impostando 
   * inserire nuovi dati per un nuovo libro da aggiungere al sistema.
   * 
   */
  nuovoLibro(): void {
    this.invio = false;
    this.libro = {
      titolo: '',
      descrizione: '',
      prezzo:'',
      autore:'',
    };
}




}