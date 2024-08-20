import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
@Input() appHighlight ='';
  constructor(private ef :ElementRef) { 
    //this.ef.nativeElement.style.backgroundColor ='yellow';
  }
@HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.appHighlight || 'red');
}
@HostListener('mouseleave') onMouseLeave(){
  this.highlight(this.appHighlight || 'blue');
}
private highlight(color: string) {
  this.ef.nativeElement.style.backgroundColor = color;
}
}
