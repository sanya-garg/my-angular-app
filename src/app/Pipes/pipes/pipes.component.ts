import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExponentPipe } from '../../CustomPipes/exponent.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ExponentPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
birthday = new Date(1999,14,11);
stringValue ='playground';
}
