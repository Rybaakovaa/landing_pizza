import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
  providers: [CartProductService]
})
export class ProductCartComponent implements OnInit {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor(public cartProduct: CartProductService) {
    this.product = {
      image: '',
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }


  addProductToCart() {
      this.cartProduct.count++;
      this.addToCartEvent.emit(this.product);
  }
}
