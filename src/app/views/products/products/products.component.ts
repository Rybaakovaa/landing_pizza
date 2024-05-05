import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  loading: boolean = false;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loading = true;

    // this.products = this.productService.getProducts();

    // this.http.get<{ data: ProductType[] }>('http://testologia.ru/pizza1s?extraField=1')
    //   .pipe(
    //     tap((result) => {
    //       console.log(result)
    //     }),
    //     map((result) => (result.data)),
    //     catchError(error => {
    //       throw new Error('omg');
    //       // return of([]);
    //     }),
    //     retry(3)
    //   )
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      })
  }

  public products: ProductType[] = [];

  addToCart(title: string): void {
    this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams: {product: title}});
  }

}
