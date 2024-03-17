import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopModule } from './shop/shop.module';
import { ContactModule } from './contact/contact.module';
import { FormsModule } from '@angular/forms';
import { TransactionModule } from './transaction/transaction.module';


@NgModule({
  declarations: [
    ClientComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AboutModule,
    ShopModule,
    ContactModule,
    FormsModule,
    TransactionModule
  ],
  exports: [
    ClientComponent,
    NavbarComponent
  ]
})
export class ClientModule { }
