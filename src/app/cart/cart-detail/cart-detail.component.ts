import { CartService } from 'app/cart/cart.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Cart } from 'app/cart/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription
  cart: Cart

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.subscription = this.cartService.cartChanged
      .subscribe(
        (cart: Cart) => this.cart = cart
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
