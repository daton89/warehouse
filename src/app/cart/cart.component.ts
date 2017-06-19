import { Observable } from 'rxjs/Observable';
import { Product } from './../product';
import { CartService } from './../cart.service';
import { Cart } from './../cart';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import _ from 'lodash'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: Observable<Product[]>
  public cart: Cart
  debouncedSetQuantity

  constructor(public cartService: CartService) {
    this.debouncedSetQuantity = _.debounce((product) => {

      this.cartService.setQuantity(product)
        .subscribe()

    }, 500)
  }

  ngOnInit() {

    this.products = this.cartService.fetch()

  }

  setQuantity(product) {

    this.debouncedSetQuantity(product)

  }

  checkout() {
    this.cartService.checkout()
      .subscribe(
      res => {
        console.log('checkout =>', res)
        window.location.reload()
      }
      )
  }

  remove(product) {
    if (confirm('Sei sicuro di voler rimuovere questo articolo dal carrello?'))
      this.cartService.remove(product)
        .subscribe(
        res => {
          console.log('remove=>', res)
        },
        err => console.error('remove=>', err)
        )
  }

  delete() {
    if (confirm('Sei sicuro di voler eliminare questo carrello?'))
      this.cartService.delete()
        .subscribe(
        res => {

          console.log('delete=>', res)

          window.location.reload()

        },
        err => console.error('delete=>', err)
        )
  }

}
