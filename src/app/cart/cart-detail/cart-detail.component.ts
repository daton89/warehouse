import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'app/cart/cart';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  @Input() cart: Cart

  constructor() { }

  ngOnInit() { }

}
