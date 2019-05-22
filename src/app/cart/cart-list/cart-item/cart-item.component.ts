import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/shared/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product
  @Input() index: number
  @Input() even: boolean
  @Input() odd: boolean

  constructor() { }

  ngOnInit() { }

}
