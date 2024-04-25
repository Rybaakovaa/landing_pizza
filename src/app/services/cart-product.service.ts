import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";
import {count} from "rxjs";

@Injectable()
export class CartProductService {
  count: number = 0;
  constructor(private cartService: CartService) { }

  getCommonCount() {
    return this.count + '/' + this.cartService.count;
  }
}
