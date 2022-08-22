import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    PerfilComponent
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
