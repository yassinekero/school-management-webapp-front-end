import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../interfaces/enseignant.interface';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private apiUrl = 'http://localhost:8080/enseignants';

  constructor(private http: HttpClient) { }

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }

}
