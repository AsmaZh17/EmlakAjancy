import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShopComponent,
    SingleProductComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  exports: [
    ShopComponent,
    SingleProductComponent
  ]
})
export class ShopModule { }
