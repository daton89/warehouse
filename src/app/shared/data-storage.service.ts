
import { Injectable } from '@angular/core';
// TODO: http is deprecated, migrate to common/http
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CartService } from 'app/cart/cart.service';
import { Product } from 'app/shared/product.model';
import { Cart } from 'app/cart/cart.model';
import { environment } from '../../environments/environment';

@Injectable()
export class DataStorageService {
  private articleBaseUri = `${environment.apiUrl}/api/articles`
  private cartBaseUri = `${environment.apiUrl}/api/carts`

  constructor(
    private http: Http,
    private cartService: CartService
  ) { }

  fetchCart(): Subscription {
    return this.http.get(this.cartBaseUri)
      .pipe(map((res: Response) => res.json()))
      .subscribe((cart: Cart) => this.cartService.setCart(cart))
  }

  addToShoppingList(product: Product): Observable<Cart> {
    const cart = this.cartService.getCart()

    const productAlreadyPresent = cart.products
      .find((p: Product) => p.article._id === product.article._id)

    if (productAlreadyPresent) {
      return this.updateAmount(cart._id, {
        ...productAlreadyPresent,
        qty: productAlreadyPresent.qty + product.qty
      })
    }

    return this.http.put(`${this.cartBaseUri}/push/${cart._id}`, product)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

  updateAmount(cartId: string, product: Product): Observable<Cart> {
    return this.http.put(`${this.cartBaseUri}/set-quantity/${cartId}`, product)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

  removeProduct(cartId: string, product: Product): Subscription {
    return this.http.put(`${this.cartBaseUri}/pull/${cartId}`, product)
      .pipe(
        map((res: Response) => res.json())
      )
      .subscribe(
        (cart: Cart) => this.cartService.setCart(cart)
      )
  }

  checkout(cartId: string): Observable<Cart> {
    return this.http.get(`${this.cartBaseUri}/checkout/${cartId}`)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

}
