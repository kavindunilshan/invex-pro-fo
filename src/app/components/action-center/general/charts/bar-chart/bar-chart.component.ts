import {Component, Input, OnChanges} from '@angular/core';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnChanges {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  public barChartOptions: any = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  public barChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: ['#36A2EB'],
      hoverBackgroundColor: ['#36A2EB']
    }]
  };

  ngOnChanges(): void {
    this.barChartData = {
      labels: this.labels,
      datasets: [{
        label: '',
        data: this.data,
        backgroundColor: ['#36A2EB'],
        hoverBackgroundColor: ['#36A2EB']
      }]
    };
  }

}
