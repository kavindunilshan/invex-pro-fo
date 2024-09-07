import {Component, Input, numberAttribute} from '@angular/core';

@Component({
  selector: 'app-small-data-box',
  templateUrl: './small-data-box.component.html',
  styleUrl: './small-data-box.component.css'
})
export class SmallDataBoxComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() subtitle!: string;
  @Input({transform: numberAttribute}) trendValue!: number;
  @Input() isPositiveTrend: boolean = true;
  @Input() icon!: string;

}
