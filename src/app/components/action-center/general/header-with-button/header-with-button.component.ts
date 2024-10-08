import {Component, Input, Output, EventEmitter, booleanAttribute} from '@angular/core';

@Component({
  selector: 'app-header-with-button',
  templateUrl: './header-with-button.component.html',
  styleUrls: ['./header-with-button.component.css']
})
export class HeaderWithButtonComponent {
  @Input() title: string = 'Header Title';
  @Input() buttonText: string = '+';
  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
