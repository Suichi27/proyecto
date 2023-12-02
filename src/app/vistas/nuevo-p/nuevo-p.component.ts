import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PacienteI } from '../../modelo/paciente.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { responseI } from '../../modelo/response.interface';
import { AlertasService } from '../../servicios/alertas/alertas.service';

@Component({
  selector: 'app-nuevo-p',
  templateUrl: './nuevo-p.component.html',
  styleUrl: './nuevo-p.component.css'
})
export class NuevoPComponent implements OnInit{

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    correo : new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl('')
});


  constructor(private api:ApiService, private router:Router, private alertas:AlertasService){}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({'token' :  token});
  }

  postForm(form:PacienteI){
    this.api.postPatient(form).subscribe(data=>{
      let respuesta:responseI = data;
      if(respuesta.status == "ok"){
        this.alertas.showSuccess('Paciente Añadido','Hecho');
        this.router.navigate(['Pacientes']);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
    }
    })


  }

  
salir(){
  this.router.navigate(['dashboard']);
}


}
