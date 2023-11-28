import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { LoginComponent } from './vistas/login/login.component';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { NuevoPComponent } from './vistas/nuevo-p/nuevo-p.component';
//import { EditarPComponent } from './vistas/editar-p/editar-p.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    //LoginComponent,
    //DashboardComponent,
    //NuevoPComponent,
    //EditarPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
