import { Router } from '@angular/router';
import { ArticleService } from '../articles/article.service';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product.model';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import _ from 'lodash'
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  public cart: Cart

  constructor(
    public cartService: CartService,
    public articleService: ArticleService,
    public dataStorageService: DataStorageService,
    public router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.cartService.cartChanged
      .subscribe(
        (cart: Cart) => this.cart = cart
      )

    this.dataStorageService.fetchCart()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onContinue() {
    // this.router.
  }

  onCheckout() {
    if (!confirm('confirm your purchase?')) return null

    this.dataStorageService.checkout(this.cart._id)
      .subscribe(
        () => {
          // alert('checkout success!')
          this.dataStorageService.fetchCart()
        },
        () => alert('checkout failed!')
      )
  }

  // saveCSV() {
  //   this.cartService.exportCSV(this.exportStart, this.exportEnd).subscribe((res) => {

  //     let data, filename, link;
  //     let csv = res.json().csv
  //     // tslint:disable-next-line:curly
  //     if (csv == null) return;

  //     filename = 'export.csv';

  //     if (!csv.match(/^data:text\/csv/i)) {
  //       csv = 'data:text/csv;charset=utf-8,' + csv;
  //     }
  //     data = encodeURI(csv);

  //     link = document.createElement('a');
  //     link.setAttribute('href', data);
  //     link.setAttribute('download', filename);
  //     link.click();

  //   })
  // }

}
