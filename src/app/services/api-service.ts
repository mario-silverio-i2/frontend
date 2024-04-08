import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface LinkData {
  date: string;
  link_url: string;
  link_views: number;
}

export interface DataItem {
  link_views: any;
  link_url: any;
  views: number;
  links: LinkData[];
  date: string;
}

export interface ChartDataResponse {
  [date: string]: DataItem[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loadMostViewedLinksData(): Observable<LinkData[]> {
    const url = `${this.baseUrl}/analytics/mockdata/table`;
    return this.http.get<LinkData[]>(url);
  }

  loadData(): Observable<ChartDataResponse> {
    const url = `${this.baseUrl}/analytics/mockdata`;
    return this.http.get<ChartDataResponse>(url);
  }

}
