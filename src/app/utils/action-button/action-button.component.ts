import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {
  @Input() text: string = 'Click Here';

  @Input() icon: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick() {
    this.onClick.emit();
  }
}
