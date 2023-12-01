import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListacitasI } from '../../modelo/listacitas.interface';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent implements OnInit {

  citas:ListacitasI[] = [];
  

  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    
    this.api.getAllCitas(1).subscribe(data=>{
      this.citas = data;
    })

  }

  editarCita(id:any){
    this.router.navigate(['editarC',id]);
  }

  nuevoCita(){
    this.router.navigate(['nuevoC']);
  }



}
