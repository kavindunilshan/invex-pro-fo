import { Component } from '@angular/core';
import {ArcElement, Chart, ChartData, Legend, PieController, Tooltip} from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

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
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

}
