import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [NgClass, NgStyle,HighlightDirective],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent implements OnInit{
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  currentClasses: Record<string, boolean> = {};
  currentStyles ={};
  color='green';
  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }
  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
}
