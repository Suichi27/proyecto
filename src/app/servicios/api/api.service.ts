import { Injectable } from '@angular/core';
import { LoginI } from '../../modelo/login.interface';
import { responseI } from '../../modelo/response.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListapacientesI } from '../../modelo/listapacientes.interface';
import { PacienteI } from '../../modelo/paciente.interface';



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

  getAllPatients(page:number):Observable<ListapacientesI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<ListapacientesI[]>(direccion)
  }

  getSinglePatient(id:any):Observable<PacienteI>{
    let direccion = this.url + "pacientes?id=" + id;

    return this.http.get<PacienteI>(direccion);
  }

  putPatient(form:PacienteI):Observable<responseI>{
    let direccion = this.url + "pacientes";
    return this.http.put<responseI>(direccion, form);
  }


  deletePatient(from:PacienteI):Observable<responseI>{
    let direccion = this.url + "pacientes";
    let Options = {
      headers: new HttpHeaders({
         'Content-type': 'application/json'
      }),
      body:from
    }
    return this.http.delete<responseI>(direccion, Options);
  }

postPatient(form:PacienteI):Observable<responseI>{
  let direccion = this.url+ "pacientes";
  return this.http.post<responseI>(direccion,form);
}


getAllCitas(page:number):Observable<ListapacientesI[]>{
  let direccion = this.url + "citas?page=" + page;
  return this.http.get<ListapacientesI[]>(direccion)
}

getSingleCita(id:any):Observable<PacienteI>{
  let direccion = this.url + "citas?id=" + id;

  return this.http.get<PacienteI>(direccion);
}

putCita(form:PacienteI):Observable<responseI>{
  let direccion = this.url + "citas";
  return this.http.put<responseI>(direccion, form);
}


deleteCita(from:PacienteI):Observable<responseI>{
  let direccion = this.url + "citas";
  let Options = {
    headers: new HttpHeaders({
       'Content-type': 'application/json'
    }),
    body:from
  }
  return this.http.delete<responseI>(direccion, Options);
}

postCita(form:PacienteI):Observable<responseI>{
let direccion = this.url+ "citas";
return this.http.post<responseI>(direccion,form);
}


getAllMeds(page:number):Observable<ListapacientesI[]>{
  let direccion = this.url + "medicamentos?page=" + page;
  return this.http.get<ListapacientesI[]>(direccion)
}

getSingleMed(id:any):Observable<PacienteI>{
  let direccion = this.url + "medicamentos?id=" + id;

  return this.http.get<PacienteI>(direccion);
}

putMed(form:PacienteI):Observable<responseI>{
  let direccion = this.url + "medicamentos";
  return this.http.put<responseI>(direccion, form);
}


deleteMed(from:PacienteI):Observable<responseI>{
  let direccion = this.url + "medicamentos";
  let Options = {
    headers: new HttpHeaders({
       'Content-type': 'application/json'
    }),
    body:from
  }
  return this.http.delete<responseI>(direccion, Options);
}

postMed(form:PacienteI):Observable<responseI>{
let direccion = this.url+ "medicamentos";
return this.http.post<responseI>(direccion,form);
}




}
