import { Directive, HostBinding, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core'

@Directive({
  selector: '[appFlyingAddToCart]',
})
export class FlyingAddToCartDirective implements OnInit {
  @HostBinding('class.flying') isFlying = false
  @ViewChild('shoppingCartBadge') badge: ElementRef

  constructor(private elmRef: ElementRef) {}

  ngOnInit() {
    console.log('elmRef', this.elmRef.nativeElement)
    console.log('badge', this.badge.nativeElement)
  }

  @HostListener('click') toggleOpen() {
    const { top } = this.elmRef.nativeElement.getBoundingClientRect()
    console.log('top', top)
    this.isFlying = !this.isFlying
  }
}
