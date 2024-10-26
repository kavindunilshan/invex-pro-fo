import {Component, Input, OnChanges} from '@angular/core';
import { Chart, ChartData, LineController, LineElement, PointElement, CategoryScale, LinearScale, Legend, Title, Tooltip } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnChanges {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

  public lineChartData: ChartData<'line', number[], string> = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: true
    }]
  };

  ngOnChanges(): void {
    this.lineChartData = {
      labels: this.labels,
      datasets: [{
        label: '',
        data: this.data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true
      }]
    };
  }

}
