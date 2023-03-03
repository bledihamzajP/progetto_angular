import { Component,OnInit } from '@angular/core';
import { LibriService } from '../../services/libri.service';
import { Libri } from '../../models/libri.model';

@Component({
  selector: 'app-libri-lista',
  templateUrl: './libri-lista.component.html',
  styleUrls: ['./libri-lista.component.css']
})
export class LibriListaComponent implements OnInit {

  libri?: Libri[];
  librii: Libri = {};
  indice = -1;
  titolo = '';

  constructor(private Libriservice: LibriService) { }

  ngOnInit(): void {
    this.listaLibri();
    
  }
/**
 * 
 * 
 * recupera tutti i libri dal server di backend chiamando il getAll()
 * sottoscrive l' Observable restituito dal getAll() e quindi assegna i dati alla libri  del componente
 */
  listaLibri(): void {
    this.Libriservice.getAll()
      .subscribe({
        next: (data) => {
          this.libri = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
/**
 * 
 *  recuperare l'elenco aggiornato dei libri dal server 
 * utilizzato per cancellare i campi del modulo dopo che un libro è stato aggiunto, modificato o eliminato
 */
  RicaricaLibri(): void {
    this.listaLibri();
    this.librii = {};
    this.indice = -1;
  }
/** 
 * 
 * restituisce tutte 
 * 
*/
  impostaLibro(librii: Libri, index: number): void {
    this.librii = librii;
    this.indice = index;
  }
/**
 * 
 * 
 * elimina tutti i libri dal database inviando una richiesta DELETE all'endpoint API /libro
 *  Il metodo deleteAll()in LibriServiceeffettua la richiesta HTTP effettiva utilizzando HttpClientdal modulo di Angular @angular/common/http.
 * 
 */
  eliminaTuttiLibri(): void {
    this.Libriservice.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.RicaricaLibri();
        },
        error: (e) => console.error(e)
      });
  }
/**
 * 
 * cerca i libri in base al titolo utilizzando LibriService.findByTitle(this.titolo)
 * e salvati nell this.libro e controllati
 * 
 */
  cercaLibro(): void {
    this.librii = {};
    this.indice = -1;
    this.Libriservice.findByTitle(this.titolo)
      .subscribe({
        next: (data) => {
          this.libri = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  
}
