
import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { BaseChartDirective, NgChartsConfiguration  } from 'ng2-charts';
import { ApiService, ChartDataResponse } from '../../services/api-service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective, HeaderComponent, FooterComponent],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']

})

export class ChartComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public lineChartType: ChartType = 'line';
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: []
  };

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.loadData().subscribe({
      next: (response: ChartDataResponse) => {
        const labels = Object.keys(response);
        const totalViewsData: number[] = [];
        const link1Data: number[] = [];
        const link2Data: number[] = [];
        const link3Data: number[] = [];

        Object.values(response).forEach(item => {
          const dataItem = item[0];

          totalViewsData.push(dataItem.views);
          link1Data.push(dataItem.links[0]?.link_views || 0);
          link2Data.push(dataItem.links[1]?.link_views || 0);
          link3Data.push(dataItem.links[2]?.link_views || 0);
        });

        this.lineChartData = {
          labels: labels,
          datasets: [
            {
              data: totalViewsData,
              label: 'Total Views',
              borderColor: 'rgb(77, 166, 253)',
              backgroundColor: 'rgba(77, 166, 253, 0.5)',
            },
            {
              data: link1Data,
              label: 'Link 1 Views',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              data: link2Data,
              label: 'Link 2 Views',
              borderColor: 'rgb(20, 232, 100)',
              backgroundColor: 'rgba(20, 232, 100, 0.5)',
            },
            {
              data: link3Data,
              label: 'Link 3 Views',
              borderColor: 'rgb(255, 206, 86)',
              backgroundColor: 'rgba(255, 206, 86, 0.5)',
            }
          ],
        };
      },
      error: (err) => console.error(err),
    });
  }
}
