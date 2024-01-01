import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filiere } from '../interfaces/filiere.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private baseApiUrl = 'http://localhost:8080/filieres'; 

  constructor(private http: HttpClient) { }

  getFilieres(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(this.baseApiUrl);
  }

  createFiliere(filiere: Filiere): Observable<any> {
    let createApiUrl = this.baseApiUrl + "/create";
    return this.http.post(createApiUrl, filiere);
  }

  deleteFiliere(filiereId: number): Observable<any> {
    let deleteApiUrl = this.baseApiUrl + "/delete/" + filiereId;
    return this.http.delete(deleteApiUrl);
  }
}
