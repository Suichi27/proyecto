import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PacienteI } from '../../modelo/paciente.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrl: './editar-p.component.css'
})
export class EditarPComponent implements OnInit{

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService){}

  datosPaciente:PacienteI[]=[];
  editarFor = new FormGroup({
    nombre: new FormControl(''),
    correo : new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl(''),
  })

ngOnInit(): void {

  let pacienteid = this.activerouter.snapshot.paramMap.get('id');
  let token = this.getToken();
  this.api.getSinglePatient(pacienteid).subscribe(data =>{
    console.log(data)
  })
  
}

getToken(){
  return localStorage.getItem('token')
}

}
