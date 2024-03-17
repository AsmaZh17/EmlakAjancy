import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ClientAuthGuard } from '../guards/client-auth.guard';

const routes: Routes = [
  {path:' ',
  component:ClientComponent,
  children:[
    {path:'about',component:AboutComponent}, 
    {path:'shop',component:ShopComponent},
    {path:'shop/:id',component: SingleProductComponent},
    {path:'contact',component:ContactComponent},
    {path:'transaction/:id',
    canActivate: [ClientAuthGuard],
    component:TransactionComponent}
  ]
  },
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
