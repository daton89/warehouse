import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Cart } from './cart';
import { Injectable } from '@angular/core';
import _ from 'lodash';

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
      .do(cart => this.cart = cart)
      .do(cart => this.products = cart.products)
  }

  add(product): Observable<Cart> {

    let obs

    if (this.cart && this.cart._id) {

      return this.http.put(`${this.baseUri}/push/${this.cart._id}`, product)
        .map(res => res.json() as Cart)
        .do(cart => this.cart = cart)
        .do(cart => {

          let diff = _.differenceBy(cart.products, this.products, '_id')

          diff.forEach(p => this.products.push(p))

        })

    } else {

      return this.http.post(this.baseUri, product)
        .map(res => res.json() as Cart)
        .do(cart => this.cart = cart)
        .do(cart => {

          this.products = cart.products

        })

    }

  }

  updateQuantity(product) {

    return this.http.put(`${this.baseUri}/set-quantity/${this.cart._id}`, product)
      .map(res => res.json() as Cart)
      .do(cart => this.cart = cart)
      .do(cart => {

        let diff = _.differenceBy(cart.products, this.products, 'qty')

        diff.forEach(p => {

          this.products.push(p)

        })

      })
  }

  checkout() {
    return this.http.get(`${this.baseUri}/checkout/${this.cart._id}`)
      .map(cart => this.cart = cart.json() as Cart)
  }

  remove(product): Observable<Cart> {
    return this.http.put(`${this.baseUri}/pull/${this.cart._id}`, product)
      .map(res => res.json() as Cart)
      .do(cart => this.cart = cart)
      .do(cart => {

        let diff = _.differenceBy(this.products, cart.products, '_id')

        diff.forEach(p => {
          _.remove(this.products, p)
        })

      })
  }

  delete() {
    return this.http.delete(`${this.baseUri}/${this.cart._id}`)
      .do(cart => {
        this.cart = new Cart()
        this.products = new Array<Product>()
      })
  }

}
