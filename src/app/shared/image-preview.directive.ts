import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagePreview]'
})
export class ImagePreviewDirective {
  @HostBinding('style.max-height') maxHeight: string = '300px'

  @HostListener('mouseover') onHover() {
    this.maxHeight = '350px'
  }

  @HostListener('mouseleave') onLeave() {
    this.maxHeight = '300px'
  }

}
