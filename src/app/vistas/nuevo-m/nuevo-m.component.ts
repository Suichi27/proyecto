import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentoI } from '../../modelo/medicamento.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertasService } from '../../servicios/alertas/alertas.service';
import { responseI } from '../../modelo/response.interface';

@Component({
  selector: 'app-nuevo-m',
  templateUrl: './nuevo-m.component.html',
  styleUrl: './nuevo-m.component.css'
})
export class NuevoMComponent implements OnInit{

  constructor(private api:ApiService, private router:Router, private alertas:AlertasService){}

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    costo:new FormControl(''),
    fechaVencimiento:new FormControl(''),
    img:new FormControl(''),
    medicamentoId:new FormControl(''),
    token: new FormControl(''),

  })

  ngOnInit(): void {
    
  }

  postForm(form:MedicamentoI){
    this.api.postMed(form).subscribe(data=>{
      let respuesta:responseI = data;
      if(respuesta.status == "ok"){
        this.alertas.showSuccess('Medicamento Añadido','Hecho');
        this.router.navigate(['Medicamentos']);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
    }
    })


  }

  salir(){
    this.router.navigate(['Medicamentos']);
  }
  



}
