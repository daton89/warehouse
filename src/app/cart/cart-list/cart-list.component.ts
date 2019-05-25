import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/shared/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() products: Product[]
  @Input() cartId: string

  constructor() { }

  ngOnInit() { }

}
