import { Component } from '@angular/core';
import {ChartData} from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public pieChartOptions: any = {
    responsive: true,
  };

  public pieChartData: ChartData<'pie', number[], string> = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };
}
