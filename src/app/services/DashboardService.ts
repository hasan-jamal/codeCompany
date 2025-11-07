import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats } from '../models/HomeDashboard/DashboardStats';
import { CurrentUserService } from './currentUser.service';
import { BaseService } from './repo/base.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService<DashboardStats> {

  private apiUrl = `${environment.API_URL}Home/counts`;

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService
  ) {
    super(http, "Home"); 
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
        headers = headers.set('Authorization', token); 
    }
    return headers;
  }

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(this.apiUrl, { headers: this.getAuthHeaders() });
  }
}