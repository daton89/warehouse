import { environment } from '../../environments/environment';
import { Product } from '../shared/product.model';
import { Observable, Subject } from 'rxjs';
import { Http } from '@angular/http';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class CartService {
  cartChanged = new Subject<Cart>()

  private cart: Cart = new Cart()

  constructor() { }

  // Methods for the Cart model
  setCart(cart: Cart) {
    cart.price = this.calculatePrice(cart)
    cart.items = this.calculateItems(cart)
    this.cart = cart
    this.cartChanged.next({ ...this.cart })
  }

  getCart() {
    return { ...this.cart }
  }

  calculatePrice(cart: Cart) {
    return cart.products
      .map((product: Product) =>
        product.article.price * product.qty
      )
      .reduce((acc, curr) => acc + curr, 0)
  }

  calculateItems(cart: Cart) {
    return cart.products
      .map((product: Product) => product.qty)
      .reduce((acc, curr) => acc + curr, 0)
  }

  // exportCSV(start, end) {
  //   return this.http.put(`${this.baseUri}/export-csv`, { start, end })
  // }

}
