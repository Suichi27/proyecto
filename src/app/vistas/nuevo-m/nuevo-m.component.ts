import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentoI } from '../../modelo/medicamento.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertasService } from '../../servicios/alertas/alertas.service';

@Component({
  selector: 'app-nuevo-m',
  templateUrl: './nuevo-m.component.html',
  styleUrl: './nuevo-m.component.css'
})
export class NuevoMComponent {

}
