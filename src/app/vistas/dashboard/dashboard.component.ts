import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListapacientesI } from '../../modelo/listapacientes.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  pacientes:ListapacientesI[ ] = [ ];

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.api.getAllPatients(1).subscribe(data=>{
      this.pacientes = data;
    })
  }

}
