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
  constructor(){}

  ngOnInit(): void {
    
  }

}
