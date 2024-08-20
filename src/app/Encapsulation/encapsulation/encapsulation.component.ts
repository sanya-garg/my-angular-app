import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [],
  encapsulation:ViewEncapsulation.Emulated,
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css'
})
export class EncapsulationComponent {

}
