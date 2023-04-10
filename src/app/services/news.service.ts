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
export class NewsService {

constructor(private http:HttpClient) { }

totalNews():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-news', httpOptions);
}

getAllNews():Observable<any>{
  return this.http.get(AUTH_API+'/api/v2/all-new',httpOptions);
}

changeStatusNew(idNew:number,status:string):Observable<any>{
  return this.http.put(AUTH_API+'/api/v2/change-status/'+idNew+'?status='+status,httpOptions);
}

}
