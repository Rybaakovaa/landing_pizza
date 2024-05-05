import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoolInputDirective} from "./directive/cool-input.directive";
import {RouterModule} from "@angular/router";
import {ProductCartComponent} from "./components/product-cart/product-cart.component";


@NgModule({
  declarations: [
    ProductCartComponent,
    CoolInputDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCartComponent,
    CoolInputDirective
  ]
})
export class SharedModule { }
