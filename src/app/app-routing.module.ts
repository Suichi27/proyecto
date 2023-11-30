import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoPComponent } from './vistas/nuevo-p/nuevo-p.component';
import { EditarPComponent } from './vistas/editar-p/editar-p.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevoP',component:NuevoPComponent},
  {path:'editarP/:id',component:EditarPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents =[LoginComponent,DashboardComponent,NuevoPComponent,EditarPComponent]
