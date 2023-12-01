import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListapacientesI } from '../../modelo/listapacientes.interface';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit {

  pacientes:ListapacientesI[ ] = [ ];

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.api.getAllPatients(1).subscribe(data=>{
      this.pacientes = data;
    })
  }

  editarPaciente(id:any){
    this.router.navigate(['editarP',id]);
  }

  nuevoPaciente(){
    this.router.navigate(['nuevoP']);
  }

}
