import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Cart } from './cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  public baseUri = 'http://localhost:9999/api/carts'

  public products: any[]
  public cart: Cart

  constructor(public http: Http) { }

  fetch(): Observable<Cart> {
    return this.http.get(this.baseUri)
      .map(res => res.json() as Cart)
      .do(cart => this.products = cart.products)
  }

  getById(id): Observable<Cart> {
    return this.http.get(`${this.baseUri}/${id}`)
      .map(res => res.json() as Cart)
      .do(cart => this.products = cart.products)
  }

  add(product): Observable<Cart> {
    return this.http.post(this.baseUri, product)
      .map(res => res.json() as Cart)
      .do(cart => this.products = cart.products)
  }

}
