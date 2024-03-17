import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeProduitRoutingModule } from './liste-routing.module';
import { ListeProduitComponent } from './liste.component';
import { AppartementComponent } from './appartement/appartement.component';
import { RouterModule } from '@angular/router';
import { VillaComponent } from './villa/villa.component';
import { DetailComponent } from './detail/detail.component';
import { ModelComponent } from './model/model.component';
import { FermeComponent } from './ferme/ferme.component';
import { MaisonComponent } from './maison/maison.component';
import { ParkingComponent } from './parking/parking.component';
import { TerrainComponent } from './terrain/terrain.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    ListeProduitComponent,
    AppartementComponent,
    VillaComponent,
    FermeComponent,
    MaisonComponent,
    ParkingComponent,
    TerrainComponent,
    DetailComponent,
    ModelComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ListeProduitRoutingModule,
    RouterModule,
  ],
  exports: [
    ListeProduitComponent,
    AppartementComponent,
    VillaComponent,
    DetailComponent
  ]
})
export class ListeProduitModule { }
