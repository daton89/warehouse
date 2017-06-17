import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Cart } from './cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  public baseUri = 'http://localhost:9999/api/carts'

  public products: Product[]
  public cart: Cart

  constructor(public http: Http) { }

  fetch(): Observable<Product[]> {
    return this.http.get(this.baseUri)
      .map(res => res.json() as Cart)
      .do(cart => this.cart = cart)
      .map(cart => this.products = cart.products)
  }

  getById(id): Observable<Cart> {
    return this.http.get(`${this.baseUri}/${id}`)
      .map(res => res.json() as Cart)
      .do(cart => this.products = cart.products)
  }

  add(product): Observable<Cart> {

    let obs

    if (this.cart._id) {
      obs = this.http.put(`${this.baseUri}/${this.cart._id}`, product)
    } else {
      obs = this.http.post(this.baseUri, product)
    }

    return obs
      .map(res => res.json() as Cart)
      .do(cart => this.products = cart.products)
  }

}
