import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { HomeAdminComponent } from './home-admin.component';


@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    HomeAdminRoutingModule
  ],
  exports: [
    HomeAdminComponent
  ]
})
export class HomeAdminModule { }
