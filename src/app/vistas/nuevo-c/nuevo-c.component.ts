import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl } from '@angular/forms';
import { responseI } from '../../modelo/response.interface';
import { AlertasService } from '../../servicios/alertas/alertas.service';
import { CitaI } from '../../modelo/cita.interface';

@Component({
  selector: 'app-nuevo-c',
  templateUrl: './nuevo-c.component.html',
  styleUrl: './nuevo-c.component.css'
})
export class NuevoCComponent implements OnInit{

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService,private alertas:AlertasService){}


  nuevoForm = new FormGroup({
    pacienteId: new FormControl(''),
    fecha: new FormControl(''),
    horaInicio: new FormControl(''),
    horaFin: new FormControl(''),
    estado: new FormControl(''),
    motivo: new FormControl(''),
    token: new FormControl(''),
    citaId: new FormControl(''),

  })

  ngOnInit(): void {
    
  }


  postForm(form:CitaI){
    this.api.postCita(form).subscribe(data=>{
      let respuesta:responseI = data;
      if(respuesta.status == "ok"){
        this.alertas.showSuccess('Cita Añadida','Hecho');
        this.router.navigate(['Citas']);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
    }
    })


  }

  
salir(){
  this.router.navigate(['Citas']);
}

}
