import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string = 'default text';
  @Input() color: string = 'default color';
  @Output() btnClick = new EventEmitter();
  
  onclick() {
    this.btnClick.emit();
  }
}