import { Product } from '../shared/product.model';
import { Subject } from 'rxjs';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

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
