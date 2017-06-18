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

  }

  checkout(){
    this.cartService.checkout()
      .subscribe(
        res => {
          console.log('checkout =>', res)
          window.location.reload()
        }
      )
  }

  remove(product) {
    this.cartService.remove(product)
      .subscribe(
      res => {
        console.log('remove=>', res)
      },
      err => console.error('remove=>', err)
      )
  }

  delete() {
    if (confirm('Sei sicuro di voler rimuovere questo articolo dal carrello?'))
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
