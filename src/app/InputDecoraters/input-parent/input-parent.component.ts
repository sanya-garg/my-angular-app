import { Component, Input } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  imports: [InputChildComponent],
  templateUrl: './input-parent.component.html',
  styleUrl: './input-parent.component.css'
})
export class InputParentComponent {
  name:string ='Vikas ';
}
