import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private activaredRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.formValues.productTitle = this.cartService.product;

    this.activatedRoute.queryParams.subscribe((params) => {
       if (params['product']) this.formValues.productTitle = params['product'];
    });
    //
    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam) this.formValues.productTitle = productParam;
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
    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }
}
