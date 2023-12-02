import { Injectable } from '@angular/core';
import { LoginI } from '../../modelo/login.interface';
import { responseI } from '../../modelo/response.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListapacientesI } from '../../modelo/listapacientes.interface';
import { PacienteI } from '../../modelo/paciente.interface';
import { ListacitasI } from '../../modelo/listacitas.interface';
import { ListamedicamentosI } from '../../modelo/listamedicamentos.interface';
import { MedicamentoI } from '../../modelo/medicamento.interface';
import { CitaI } from '../../modelo/cita.interface';

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

//CITAS

getAllCitas(page:number):Observable<ListacitasI[]>{
  let direccion = this.url + "citas?page=" + page;
  return this.http.get<ListacitasI[]>(direccion)
}

getSingleCita(id:any):Observable<CitaI>{
  let direccion = this.url + "citas?id=" + id;

  return this.http.get<CitaI>(direccion);
}

putCita(form:CitaI):Observable<responseI>{
  let direccion = this.url + "citas";
  return this.http.put<responseI>(direccion, form);
}


deleteCita(from:CitaI):Observable<responseI>{
  let direccion = this.url + "citas";
  let Options = {
    headers: new HttpHeaders({
       'Content-type': 'application/json'
    }),
    body:from
  }
  return this.http.delete<responseI>(direccion, Options);
}

postCita(form:CitaI):Observable<responseI>{
let direccion = this.url+ "citas";
return this.http.post<responseI>(direccion,form);
}


//MEDICAMENTOS

getAllMeds(page:number):Observable<ListamedicamentosI[]>{
  let direccion = this.url + "medicamentos?page=" + page;
  return this.http.get<ListamedicamentosI[]>(direccion)
}

getSingleMed(id:any):Observable<MedicamentoI>{
  let direccion = this.url + "medicamentos?id=" + id;

  return this.http.get<MedicamentoI>(direccion);
}

putMed(form:MedicamentoI):Observable<responseI>{
  let direccion = this.url + "medicamentos";
  return this.http.put<responseI>(direccion, form);
}


deleteMed(from:MedicamentoI):Observable<responseI>{
  let direccion = this.url + "medicamentos";
  let Options = {
    headers: new HttpHeaders({
       'Content-type': 'application/json'
    }),
    body:from
  }
  return this.http.delete<responseI>(direccion, Options);
}

postMed(form:MedicamentoI):Observable<responseI>{
let direccion = this.url+ "medicamentos";
return this.http.post<responseI>(direccion,form);
}




}
