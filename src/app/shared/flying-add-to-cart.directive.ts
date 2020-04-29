import { Directive, HostBinding, HostListener, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appFlyingAddToCart]',
})
export class FlyingAddToCartDirective implements OnInit {
  // @HostBinding('class.flying') isFlying = false

  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // console.log('elmRef', this.elmRef.nativeElement)
  }

  @HostListener('click') toggleOpen() {
    // this.isFlying = !this.isFlying

    const badge = document.getElementById('shopping-cart-badge').getBoundingClientRect()

    // transform: translate(350px,0);
    // -webkit-transform: translate(350px,0); /** Chrome & Safari **/
    // -o-transform: translate(350px,0); /** Opera **/
    // -moz-transform: translate(350px,0); /** Firefox **/

    this.renderer.setStyle(this.elmRef.nativeElement, 'transform', `translate(${badge.x}px, ${badge.y}px)`)
    this.renderer.setStyle(this.elmRef.nativeElement, '-webkit-transform', `translate(${badge.x}px, ${badge.y}px)`)
    this.renderer.setStyle(this.elmRef.nativeElement, '-o-transform', `translate(${badge.x}px, ${badge.y}px)`)
    this.renderer.setStyle(this.elmRef.nativeElement, '-moz-transform', `translate(${badge.x}px, ${badge.y}px)`)

    const elDomRect = this.elmRef.nativeElement.getBoundingClientRect()
    console.log('elDomRect', elDomRect)
  }
}
