import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitasComponent } from './vistas/citas/citas.component';
import { EditarCComponent } from './vistas/editar-c/editar-c.component';
import { NuevoCComponent } from './vistas/nuevo-c/nuevo-c.component';
import { MedicamentosComponent } from './vistas/medicamentos/medicamentos.component';
import { NuevoMComponent } from './vistas/nuevo-m/nuevo-m.component';
import { EditarMComponent } from './vistas/editar-m/editar-m.component';
import { PacientesComponent } from './vistas/pacientes/pacientes.component';
//import { LoginComponent } from './vistas/login/login.component';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { NuevoPComponent } from './vistas/nuevo-p/nuevo-p.component';
//import { EditarPComponent } from './vistas/editar-p/editar-p.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    CitasComponent,
    EditarCComponent,
    NuevoCComponent,
    MedicamentosComponent,
    NuevoMComponent,
    EditarMComponent,
    PacientesComponent
    //LoginComponent,
    //DashboardComponent,
    //NuevoPComponent,
    //EditarPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule,
     BrowserAnimationsModule, // required animations module
     ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
