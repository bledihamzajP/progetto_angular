import { Component, OnInit,Input } from '@angular/core';
import { LibriService } from '../../services/libri.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Libri } from '../../models/libri.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-libri-info',
  templateUrl: './libri-info.component.html',
  styleUrls: ['./libri-info.component.css']
})
export class LibriInfoComponent implements OnInit{

  //decorator = può ricevere dati dal componente genitore. Il componente padre utilizza il property binding per associarlo
  @Input() modalita = false;

  @Input() librii: Libri = {
    titolo: '',
    descrizione: '',
    prezzo: '',
    autore:''
  };
  
  messaggio = '';

  constructor(
    private LibriService: LibriService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    if (!this.modalita) {
      this.messaggio = '';
      // //snapshot contiene i parametri passati nell'URL corrente.   .route contiene lo stato corrente del percorso.
      this.getLibro(this.route.snapshot.params["id"]);
      
    }
  }


//usa la get---------------------------------

  getLibro(id: string): void {
    this.LibriService.get(id)
      .subscribe({
        next: (data) => {
          this.librii = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateLibro(): void {
    this.messaggio = '';

    this.LibriService.update(this.librii.id, this.librii)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.messaggio = res.messaggio ? res.messaggio : 'libro modificato!';
        },
        error: (e) => console.error(e)
      });
  }


  
  deleteLibro(): void {
    this.LibriService.delete(this.librii.id)
      .subscribe({
        next: () => {
          this.router.navigate(['/libro']);
        },
        error: (e) => console.error(e)
      });
  }


}
