import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductComponent } from './components/common/product/product.component';
import { CoolInputDirective } from './directive/cool-input.directive';
import {ProductService} from "./services/product.service";
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CoolInputDirective,
    MainComponent,
    AboutComponent,
    ProductsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
