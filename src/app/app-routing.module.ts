import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoPComponent } from './vistas/nuevo-p/nuevo-p.component';
import { EditarPComponent } from './vistas/editar-p/editar-p.component';
import { EditarMComponent } from './vistas/editar-m/editar-m.component';
import { EditarCComponent } from './vistas/editar-c/editar-c.component';
import { NuevoCComponent } from './vistas/nuevo-c/nuevo-c.component';
import { NuevoMComponent } from './vistas/nuevo-m/nuevo-m.component';
import { CitasComponent } from './vistas/citas/citas.component';
import { MedicamentosComponent } from './vistas/medicamentos/medicamentos.component';
import { PacientesComponent } from './vistas/pacientes/pacientes.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevoP',component:NuevoPComponent},
  {path:'editarP/:id',component:EditarPComponent},
  {path:'nuevoC',component:NuevoCComponent},
  {path:'editarC/:id',component:EditarCComponent},
  {path:'nuevoM',component:NuevoMComponent},
  {path:'editarM/:id',component:EditarMComponent},
  {path:'Citas',component:CitasComponent},
  {path:'Medicamentos',component:MedicamentosComponent},
  {path:'Pacientes',component:PacientesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents =[LoginComponent,DashboardComponent,NuevoPComponent,EditarPComponent,NuevoMComponent,NuevoCComponent,EditarCComponent,EditarMComponent,CitasComponent,MedicamentosComponent,PacientesComponent]
