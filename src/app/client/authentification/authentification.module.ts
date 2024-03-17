import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthentificationComponent,
    SignUpComponent,
    LoginComponent,
    BienvenueComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthentificationComponent,
    SignUpComponent,
    LoginComponent,
    BienvenueComponent
  ]
})
export class AuthentificationModule { }
