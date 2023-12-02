import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListamedicamentosI } from '../../modelo/listamedicamentos.interface';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export class MedicamentosComponent implements OnInit {
  
  medicamentos:ListamedicamentosI[] = [];

  constructor(private api:ApiService,private router:Router){}



  ngOnInit(): void {
    this.api.getAllMeds(1).subscribe(data=>{
      this.medicamentos = data;
    })
  }

  editarMedicamento(id:any){
    this.router.navigate(['editarM',id]);
  }

  nuevoMedicamento(){
    this.router.navigate(['nuevoM']);
  }


}
