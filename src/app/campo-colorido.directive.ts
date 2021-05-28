import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) {

      this.render.setStyle(this.elementRef.nativeElement,
        'background-color', 'yellow')
   }

}
