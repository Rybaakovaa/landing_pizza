import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit{

  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
