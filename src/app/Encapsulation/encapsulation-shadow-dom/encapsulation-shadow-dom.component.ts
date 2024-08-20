import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-shadow-dom',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './encapsulation-shadow-dom.component.html',
  styleUrl: './encapsulation-shadow-dom.component.css'
})
export class EncapsulationShadowDOMComponent {

}
