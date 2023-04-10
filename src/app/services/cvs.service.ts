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
export class CvsService {

constructor(private http:HttpClient) { }

totalCvs():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-cvs', httpOptions);
}

getAllCvs():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/getAll-cvs', httpOptions);
}

}
