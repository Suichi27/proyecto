import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MedicamentoI } from '../../modelo/medicamento.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl } from '@angular/forms';
import { responseI } from '../../modelo/response.interface';
import { AlertasService } from '../../servicios/alertas/alertas.service';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrl: './editar-m.component.css'
})
export class EditarMComponent implements OnInit{

  constructor(private activerouter:ActivatedRoute, private router:Router,private api:ApiService,private alertas:AlertasService){}

  datosMedicamento:MedicamentoI;
  editarForm = new FormGroup({
    nombre: new FormControl(''),
    costo:new FormControl(''),
    fechaVencimiento:new FormControl(''),
    img:new FormControl(''),
    medicamentoId:new FormControl(''),
    token: new FormControl(''),

  });


  ngOnInit(): void {

    let medicamentoid =this.activerouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleMed(medicamentoid).subscribe(data  =>{
      this.datosMedicamento = data[0];
      this.editarForm.setValue({
         'nombre': this.datosMedicamento.Nombre,
         'costo': this.datosMedicamento.Costo,
         'fechaVencimiento':this.datosMedicamento.FechaVencimiento,
         'img':this.datosMedicamento.img,
         'medicamentoId': medicamentoid,
         'token': token,
  
      });
 })
}

getToken(){
  return localStorage.getItem('token')
}

postForm(form:MedicamentoI){
  this.api.putMed(form).subscribe( data =>{
      let respuesta:responseI = data;
      if(respuesta.status == "ok"){
          this.alertas.showSuccess('Datos modificados','Hecho');
          this.router.navigate(['Pacientes'])
        }else{
          this.alertas.showError(respuesta.result.error_msg,'Error');
      }
  })
}

eliminar(){
  let datos:MedicamentoI = this.editarForm.value;
  this.api.deleteMed(datos).subscribe(data =>{
    let respuesta:responseI = data;
      if(respuesta.status == "ok"){
          this.alertas.showSuccess('Paciente eliminado','Hecho');
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
