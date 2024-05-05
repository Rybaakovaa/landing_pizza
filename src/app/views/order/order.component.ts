import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }


  private subsctiption: Subscription | null = null;
  private subsctiptionOrder: Subscription | null = null;

  ngOnInit(): void {
    // this.formValues.productTitle = this.cartService.product-cart;

    this.subsctiption = this.activatedRoute.queryParams.subscribe((params) => {
       if (params['product']) this.formValues.productTitle = params['product'];
    });
    //
    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product-cart');
    // if (productParam) this.formValues.productTitle = productParam;
  }

  ngOnDestroy() {
    this.subsctiption?.unsubscribe();
    this.subsctiptionOrder?.unsubscribe();
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу!');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес!');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон!');
      return;
    }

    // ajax
    this.subsctiptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ!');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: ''
          }
        } else {
          alert('Ошибка!');
        }
      })

  }
}
