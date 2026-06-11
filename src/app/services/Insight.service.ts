import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from './repo/base.service';
import { CurrentUserService } from './currentUser.service';
import { InsightDto } from '../models/Insight/Insight.modal';
import { InsightResponse } from '../models/Insight/Insight.Response';

@Injectable({
  providedIn: 'root'
})
export class InsightService extends BaseService<InsightDto> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService,
    private translateService: TranslateService
  ) {
    super(http, "Insight");
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token); 
    }
    return headers;
  }

  getAllInsights(sort: string = '', page: number = 1, pageSize: number = 10, searchText: string = ''): Observable<InsightResponse> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const params = new HttpParams()
      .set('sort', sort)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchText', searchText)
      .set('lang', lang);

    return this.http.get<InsightResponse>(`${this.baseURL}${this.endPoint}/GetAllInsights`, { params });
  }

  getInsightDetails(id: number): Observable<InsightDto> {
    const lang = this.translateService.getCurrentLang() || 'en';
    return this.http.get<InsightDto>(`${this.baseURL}${this.endPoint}/Details/${id}?lang=${lang}`);
  }

  createInsight(formData: FormData): Observable<InsightDto> {
    return this.http.post<InsightDto>(`${this.baseURL}${this.endPoint}/Create`, formData, { headers: this.getAuthHeaders() });
  }

  updateInsight(formData: FormData): Observable<InsightDto> {
    const lang = this.translateService.getCurrentLang() || 'en';
    return this.http.put<InsightDto>(`${this.baseURL}${this.endPoint}/Update?lang=${lang}`, formData, { headers: this.getAuthHeaders() });
  }

  archiveInsight(id: number): Observable<any> {
    return this.http.patch<any>(`${this.baseURL}${this.endPoint}/Archive/${id}`, {}, { headers: this.getAuthHeaders() });
  }

  unArchiveInsight(id: number): Observable<any> {
    return this.http.patch<any>(`${this.baseURL}${this.endPoint}/UnArchive/${id}`, {}, { headers: this.getAuthHeaders() });
  }

  deleteInsight(id: number): Observable<any> {
    const lang = this.translateService.getCurrentLang() || 'en';
    return this.http.delete<any>(`${this.baseURL}${this.endPoint}/Delete/${id}?lang=${lang}`, { headers: this.getAuthHeaders() });
  }
}