import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-none',
  standalone: true,
  imports: [],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './encapsulation-none.component.html',
  styleUrl: './encapsulation-none.component.css'
})
export class EncapsulationNoneComponent {

}
