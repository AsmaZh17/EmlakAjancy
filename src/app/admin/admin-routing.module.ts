import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { AjouterComponent } from './gestion-produit/ajouter/ajouter.component';
import { ModifierComponent } from './gestion-produit/modifier/modifier.component';
import { ListeProduitComponent } from './liste/liste.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginComponent } from './login/login.component';
import { AppartementComponent } from './liste/appartement/appartement.component';
import { VillaComponent } from './liste/villa/villa.component';
import { DetailComponent } from './liste/detail/detail.component';
import { ModelComponent } from './liste/model/model.component';
import { FermeComponent } from './liste/ferme/ferme.component';
import { MaisonComponent } from './liste/maison/maison.component';
import { ParkingComponent } from './liste/parking/parking.component';
import { TerrainComponent } from './liste/terrain/terrain.component';
import { AuthGuard } from '../guards/auth.guard';
import { AjouterAdminComponent } from './gestion-produit/ajouter-admin/ajouter-admin.component';
import { UserComponent } from './liste/user/user.component';

const routes: Routes = [
  {path:'admin',
  canActivate: [AuthGuard],
    component:AdminComponent,
    children:[
      {path:'homeadm',component:HomeAdminComponent},
      {path:'liste',component:ListeProduitComponent,
        children:[
          {path:'User',component:UserComponent},
          {path:'Appartement',component:AppartementComponent},
          {path:'Villa',component:VillaComponent},
          {path:'Ferme',component:FermeComponent},
          {path:'Maison',component:MaisonComponent},
          {path:'Parking',component:ParkingComponent},
          {path:'Terrain',component:TerrainComponent}, 
          {path:'Model',component:ModelComponent},
          {path:'Detail/:categorie/:id',component:DetailComponent},
        ]
      },
      {path:'gestion', component:GestionProduitComponent,
        children:[
          {path:'ajouter' , component:AjouterComponent},
          {path:'modifier' , component:ModifierComponent},
          {path: 'modifier/:categorie/:id', component: ModifierComponent},
          {path: 'ajouterAdmin' , component:AjouterAdminComponent}
        ]
      }
    ]   
  },
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
