import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../interfaces/departement.interface';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private baseApiUrl = 'http://localhost:8080/departments';
  constructor(private http: HttpClient) { }

  getDepartements() : Observable<Departement[]>
  {
       return this.http.get<Departement[]>(this.baseApiUrl )
  }
  createDepartement(departement  : Departement)
  {
    let createApiUrl = this.baseApiUrl + "/create";
    return this.http.post(createApiUrl, departement);
  }
  deleteDepartement(departementId : number) 
  {
    let deleteApiUrl = this.baseApiUrl + "/delete/" + departementId;
    return this.http.delete(deleteApiUrl);
  }
}
