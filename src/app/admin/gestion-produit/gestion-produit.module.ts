import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionProduitRoutingModule } from './gestion-produit-routing.module';
import { GestionProduitComponent } from './gestion-produit.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';


@NgModule({
  declarations: [
    GestionProduitComponent,
    AjouterComponent,
    ModifierComponent,
    AjouterAdminComponent
  ],
  imports: [
    CommonModule,
    GestionProduitRoutingModule,
    ReactiveFormsModule 
  ],
  exports: [
    GestionProduitComponent,
    AjouterComponent,
    ModifierComponent
  ]
})
export class GestionProduitModule { }
