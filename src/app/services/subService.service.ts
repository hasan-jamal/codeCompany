import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './repo/base.service';
import { CurrentUserService } from './currentUser.service';
import { SubService, SubServiceDto } from '../models/SubService/SubService.modal';
import { SubServiceResponse } from '../models/SubService/SubService.Response';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SubServiceService extends BaseService<SubService> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService,
    private translateService: TranslateService
  ) {
    super(http, "SubService"); // endpoint
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    return headers;
  }

  // AllowAnonymous
  getAllSubServices(sort: string, page: number = 1, pageSize: number = 10, searchText: string = ''): Observable<SubServiceDto[]> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const url = `${this.baseURL}${this.endPoint}/GetAllSubServices?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}&lang=${lang}`;
    return this.http.get<SubServiceDto[]>(url);
  }

  // AllowAnonymous
  getSubServiceDetails(id: number): Observable<SubServiceResponse> {
    const url = `${this.baseURL}${this.endPoint}/DetailsSubService?id=${id}`;
    return this.http.get<SubServiceResponse>(url);
  }

  getSubServices(sort: string,page: number = 1, pageSize: number = 5, searchText: string = ''): Observable<SubServiceResponse> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const url = `${this.baseURL}${this.endPoint}/GetSubServices?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}&lang=${lang}`;
    return this.http.get<SubServiceResponse>(url, { headers: this.getAuthHeaders() });
  }

  archiveSubService(id: number): Observable<any> {
    const url = `${this.baseURL}${this.endPoint}/ArchiveSubService/${id}`;
    return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
  }

  unArchiveSubService(id: number): Observable<any> {
    const url = `${this.baseURL}${this.endPoint}/UnArchiveSubService/${id}`;
    return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
  }

  createSubService(formData: FormData): Observable<SubServiceDto> {
    const url = `${this.baseURL}${this.endPoint}/CreateSubService`;
    return this.http.post<SubServiceDto>(url, formData, { headers: this.getAuthHeaders() });
  }

  updateSubService(formData: FormData): Observable<SubServiceDto> {
    const url = `${this.baseURL}${this.endPoint}/UpdateSubService/${formData.get('id')}`;
    return this.http.put<SubServiceDto>(url, formData, { headers: this.getAuthHeaders() });
  }

  deleteSubService(id: number): Observable<any> {
    const url = `${this.baseURL}${this.endPoint}/DeleteSubService/${id}`;
    return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
  }
}
