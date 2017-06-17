import { Observable } from 'rxjs/Observable';
import { Product } from './../product';
import { CartService } from './../cart.service';
import { Cart } from './../cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: Observable<Product[]>
  public cart: Cart

  constructor(public cartService: CartService) { }

  ngOnInit() {

    this.products = this.cartService.fetch()
      // .do(cart => this.products = cart.products as Observable<Product[]>)
      console.log('p=>', this.products);

  }



}
