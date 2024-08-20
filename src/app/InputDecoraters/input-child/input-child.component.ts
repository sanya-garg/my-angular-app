import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {
  @Input() value=0;
  @Input({required:true}) requiredValue ="";
  @Input({transform: trimString}) label = '';

  constructor() { }
}
function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
