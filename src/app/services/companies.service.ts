import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
  })
export class CompaniesService {

constructor(private http:HttpClient) { }

getAllCompanies():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/get-all-company', httpOptions);
}

getTotal():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-com', httpOptions);
}



}
