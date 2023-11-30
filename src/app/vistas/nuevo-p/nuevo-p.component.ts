import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PacienteI } from '../../modelo/paciente.interface';
import { responseI } from '../../modelo/response.interface';
import { ApiService } from '../../servicios/api/api.service';
import { AlertasService } from '../../servicios/alertas/alertas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-p',
  templateUrl: './nuevo-p.component.html',
  styleUrls: ['./nuevo-p.component.css']
})
export class NuevoPComponent implements OnInit {

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


  constructor(private api:ApiService, private router:Router, private alert:AlertasService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token' : token
    });
  }

  enviarForm(form:PacienteI){
      this.api.postPatient(form).subscribe( data =>{
          console.log(data);
      })
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}