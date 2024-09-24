import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sub-topic',
  templateUrl: './sub-topic.component.html',
  styleUrl: './sub-topic.component.css'
})
export class SubTopicComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
