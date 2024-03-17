import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { AuthentificationComponent } from './authentification.component';
import { DeconnecterComponent } from './deconnecter/deconnecter.component';

const routes: Routes = [ 
  {path:'authentification',component:AuthentificationComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent},
    {path:'bienvenue/:id',component:BienvenueComponent},
    {path:'deconnecter',component:DeconnecterComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
