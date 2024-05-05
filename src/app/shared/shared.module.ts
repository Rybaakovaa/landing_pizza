import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoolInputDirective} from "./directive/cool-input.directive";
import {RouterModule} from "@angular/router";
import {ProductCartComponent} from "./components/product-cart/product-cart.component";
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    ProductCartComponent,
    CoolInputDirective,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCartComponent,
    CoolInputDirective,
    PopupComponent
  ]
})
export class SharedModule { }
