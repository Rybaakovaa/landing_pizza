import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {observable, Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private observable: Observable<string>;
  private promise: Promise<string>;

  constructor(public cartSevice: CartService) {
    this.promise = new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('hello!');
      }, 2000);
    });

    this.observable = new Observable((observable) => {
      setTimeout(() => {
        observable.next('hello!');
      }, 2000);
    });
  }

  ngOnInit() {
    this.observable.subscribe((param: string) => {
      console.log(param);
    })
  }
}
