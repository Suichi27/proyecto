import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  listaCitas(){
    this.router.navigate(['Citas']);
  }

  listaMedicamentos(){
    this.router.navigate(['Medicamentos']);
  }

  inicio(){
    this.router.navigate(['dashboard']);
  }




}
