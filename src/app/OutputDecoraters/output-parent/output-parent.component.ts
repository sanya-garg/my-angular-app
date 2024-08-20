import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-parent',
  standalone: true,
  imports: [OutputChildComponent, CommonModule],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {
items = ['white','grey','yellow','pink'];

addNewItem(value :string){
  this.items.push(value);
  console.log(this.items);
}
}
