import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-nbinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-nbinding.component.html',
  styleUrl: './two-way-nbinding.component.css'
})
export class TwoWayNBindingComponent {
nameText :string ='Vikas';
readName(){
  this.nameText = this.nameText.toLocaleUpperCase();
  console.log(this.nameText);
}
}
