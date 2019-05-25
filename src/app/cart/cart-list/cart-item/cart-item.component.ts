import { Component, OnInit, Input } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators';

import { DataStorageService } from 'app/shared/data-storage.service';
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
  @Input() cartId: string
  numbers: Array<number> = [1,2,3,4,5]

  constructor(
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() { }

  onSetAmount(product: Product, amountInput: HTMLInputElement) {
    product.qty = +amountInput.value
    this.dataStorageService.updateAmount(this.cartId, product)
      .pipe(
        map(() => alert(this.product.updated = true)),
        debounceTime(3000)
      )
      .subscribe(
        ()=> alert(this.product.updated = false)
      )
  }

  onRemove(product: Product){
    this.dataStorageService.removeProduct(this.cartId, product)
  }
}
