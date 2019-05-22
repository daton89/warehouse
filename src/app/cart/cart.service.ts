import { environment } from '../../environments/environment';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Cart } from './cart';
import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  cartChanged = new Subject<Cart>()

  private cart: Cart = new Cart()

  constructor( ) { }

  // Methods for the Cart model
  setCart(cart: Cart) {
    this.cart = cart
    this.cartChanged.next({...this.cart})
  }

  getCart() {
    return {...this.cart}
  }

  // public baseUri = `${environment.apiUrl}/api/carts`

  // public products: Product[] = []
  // public cart: Cart

  // constructor(public http: Http) { }

  // fetch(): Observable<Product[]> {
  //   return this.http.get(this.baseUri)
  //     .do(res => console.log(res))
  //     .map(res => res.json() as Cart)
  //     .do(cart => this.cart = cart)
  //     .map(cart => this.products = cart.products)
  // }

  // getById(id): Observable<Cart> {
  //   return this.http.get(`${this.baseUri}/${id}`)
  //     .map(res => res.json() as Cart)
  //     .do(cart => this.cart = cart)
  //     .do(cart => this.products = cart.products)
  // }

  // add(product): Observable<Cart> {

  //   if (this.cart && this.cart._id) {

  //     return this.http.put(`${this.baseUri}/push/${this.cart._id}`, product)
  //       .map(res => res.json() as Cart)
  //       .do(cart => this.cart = cart)
  //       .do(cart =>
  //         _.differenceBy(cart.products, this.products, '_id')
  //           .forEach(p => this.products.push(p))
  //       )

  //   } else {

  //     return this.http.post(this.baseUri, product)
  //       .map(res => res.json() as Cart)
  //       .do(cart => this.cart = cart)
  //       .do(cart => {
  //         this.products.push(cart.products[0])
  //       })

  //   }

  // }

  // setQuantity(product) {

  //   return this.http.put(`${this.baseUri}/set-quantity/${this.cart._id}`, product)
  //     .map(res => res.json() as Cart)
  //     .do(cart => this.cart = cart)
  //     .do(cart => {

  //       const i = cart.products.findIndex((p) => p._id === product._id)

  //       const pi = this.products.findIndex((p) => p._id === product._id)

  //       this.products.splice(pi, 1, cart.products[i])

  //     })
  // }

  // checkout() {
  //   return this.http.get(`${this.baseUri}/checkout/${this.cart._id}`)
  //     .map(cart => this.cart = cart.json() as Cart)
  // }

  // exportCSV(start, end) {
  //   return this.http.put(`${this.baseUri}/export-csv`, { start, end })
  // }

  // remove(product): Observable<Cart> {
  //   return this.http.put(`${this.baseUri}/pull/${this.cart._id}`, product)
  //     .map(res => res.json() as Cart)
  //     .do(cart => this.cart = cart)
  //     .do(cart => {

  //       _.differenceBy(this.products, cart.products, '_id')
  //         .forEach(p => {
  //           _.remove(this.products, p)
  //         })

  //     })
  // }

  // delete() {
  //   return this.http.delete(`${this.baseUri}/${this.cart._id}`)
  //     .do(cart => {
  //       this.cart = new Cart()
  //       this.products = new Array<Product>()
  //     })
  // }

}
