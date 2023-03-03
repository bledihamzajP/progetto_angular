import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libri } from '../models/libri.model';


const Url = 'http://localhost:8080/api/libro';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  /**
   * utilizza il modulo HttpClient per eseguire operazioni CRUD
   * I metodi restituiscono Observables dei tipi corrispondenti, 
   * consentendo la gestione asincrona delle richieste e delle risposte API nei componenti Angular.
   */

  constructor(private http: HttpClient) { }

  getAll(): Observable<Libri[]> {
    return this.http.get<Libri[]>(Url);
  }

  get(id: any): Observable<Libri> {
    return this.http.get(`${Url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(Url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${Url}/${id}`, data);
    
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${Url}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(Url);
  }

  findByTitle(titolo: any): Observable<Libri[]> {
    return this.http.get<Libri[]>(`${Url}?titolo=${titolo}`);
  }





}