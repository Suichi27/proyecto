import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl } from '@angular/forms';
import { responseI } from '../../modelo/response.interface';
import { AlertasService } from '../../servicios/alertas/alertas.service';
import { CitaI } from '../../modelo/cita.interface';

@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.component.html',
  styleUrl: './editar-c.component.css'
})
export class EditarCComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService,private alertas:AlertasService){}

  datosCita:CitaI;
  editarForm = new FormGroup({
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

    let citaid = this.activerouter.snapshot.paramMap.get('id');
       let token = this.getToken(); 
       this.api.getSingleCita(citaid).subscribe(data=>{
        this.datosCita = data[0];
        this.editarForm.setValue({
       
          'pacienteId': this.datosCita.PacienteId,
          'fecha': this.datosCita.Fecha,
          'horaInicio': this.datosCita.HoraInicio,
          'horaFin': this.datosCita.HoraFIn,
          'estado': this.datosCita.Estado,
          'motivo': this.datosCita.Motivo,
          'citaId':citaid,
          'token':token,
         
        });
       })
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form:CitaI){
    this.api.putCita(form).subscribe(data=>{
      let respuesta:responseI = data;
      if(respuesta.status == "ok"){
        this.alertas.showSuccess('Datos modificados','Hecho');
        this.router.navigate(['Citas'])
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    })
  }

  
  eliminar(){
    let datos:CitaI = this.editarForm.value;
    this.api.deleteCita(datos).subscribe(data =>{
      let respuesta:responseI = data;
        if(respuesta.status == "ok"){
            this.alertas.showSuccess('Paciente eliminado','Hecho');
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
