import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LinkData, ApiService} from '../../services/api-service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['formatedDate', 'link_views', 'link_url'];
  dataSource: LinkData[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.apiService.loadMostViewedLinksData().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (err) => console.error(err),
    });
  }
}
