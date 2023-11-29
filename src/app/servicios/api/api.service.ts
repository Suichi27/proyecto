import { Injectable } from '@angular/core';
import { LoginI } from '../../modelo/login.interface';
import { responseI } from '../../modelo/response.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost/proyectos/intento2/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<responseI>{
    let direccion = this.url + "auth";
    return this.http.post<responseI>(direccion,form);
  }
}
