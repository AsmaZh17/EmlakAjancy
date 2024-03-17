import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GestionProduitModule } from './gestion-produit/gestion-produit.module';
import { HomeAdminModule } from './home-admin/home-admin.module';
import { ListeProduitModule } from './liste/liste.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GestionProduitModule,
    ListeProduitModule,
    HomeAdminModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    NavbarComponent
  ]
})
export class AdminModule { }
