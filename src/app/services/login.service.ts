import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url ="https://nancyb3a.github.io/Test_/usuarios_PGY4121.json"

  constructor(private http:HttpClient) { }

  cargarlogin(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  cargarlogins(id:string): Observable<any>{
    return this.http.get(this.url+id)
  }
}
