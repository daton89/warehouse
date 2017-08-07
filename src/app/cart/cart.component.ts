import { Router } from '@angular/router';
import { ArticleService } from './../article.service';
import { Observable } from 'rxjs/Observable';
import { Product } from './../product';
import { CartService } from './../cart.service';
import { Cart } from './../cart';
import { Component, OnInit, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import _ from 'lodash'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, AfterViewInit {
  exportStart: any;
  exportEnd: any;
  articles: any;
  debouncedSearchByCode: any;
  debouncedSetQuantity: any;

  @ViewChild('searchCode')

  private _inputElement: ElementRef;

  public products: Observable<Product[]>;
  public cart: Cart;

  constructor(
    public cartService: CartService,
    public articleService: ArticleService,
    public router: Router
  ) {

    this.debouncedSetQuantity = _.debounce((product) => {

      this.cartService.setQuantity(product)
        .subscribe(res => {

          this.cart = this.cartService.cart;

        });

    }, 500);

    this.debouncedSearchByCode = _.debounce((code) => {

      this.articles = this.articleService.getByCode(code);

      this.articles.subscribe(article => {
        if (article.length === 1) {
          this.addToCart({ article: article[0], qty: 1 });
        }
      });

    }, 100);

  }

  ngOnInit() {

    this.products = this.cartService.fetch()
      .do(products => {

        this.cart = this.cartService.cart

      })

  }

  ngAfterViewInit(): void {
    this._inputElement.nativeElement.focus();
  }

  searchByCode(code) {

    if (!code) {
      this.articles = this.articleService.fetch()
      return
    }

    this.debouncedSearchByCode(code)

    // .subscribe((res) => {
    //   // this.articles = []
    //   // if (res.json()) this.articles = [res.json()]
    // })
  }

  addToCart(product) {

    this.cartService.add(product)
      .subscribe(cart => {

        // window.location.reload()
        // this.code = ''
        this._inputElement.nativeElement.value = ''

        this.cart = this.cartService.cart

      })
  }

  setQuantity(product) {

    this.debouncedSetQuantity(product)

  }

  checkout() {
    this.cartService.checkout()
      .subscribe(
      (res) => {
        console.log('checkout =>', res)
        window.location.reload()
      }
      )
  }

  saveCSV() {
    this.cartService.exportCSV(this.exportStart, this.exportEnd).subscribe((res) => {

      let data, filename, link;
      let csv = res.json().csv
      // tslint:disable-next-line:curly
      if (csv == null) return;

      filename = 'export.csv';

      if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
      }
      data = encodeURI(csv);

      link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();

    })
  }

  remove(product) {
    if (confirm('Sei sicuro di voler rimuovere questo articolo dal carrello?')) {

      this.cartService.remove(product)
        .subscribe(
        res => {
          console.log('remove=>', res)

          this.cart = this.cartService.cart

        },
        err => console.error('remove=>', err)
        )
    }
  }

  delete() {
    if (confirm('Sei sicuro di voler eliminare questo carrello?')) {

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

}
