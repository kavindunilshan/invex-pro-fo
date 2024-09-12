import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css'
})
export class ChartContainerComponent {
  @Input() title: string = 'Chart Title';

}
