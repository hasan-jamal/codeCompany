import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './repo/base.service';
import { CurrentUserService } from './currentUser.service';
import { ServiceDto,ServiceInterface } from '../models/Service/Service.modal';
import { ServiceResponse } from '../models/Service/Service.Response';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseService<ServiceInterface> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService,
    private translateService: TranslateService
  ) {
    super(http, "Service"); // endpoint
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    return headers;
  }

getAllServices(
    sort: string = '',
    page: number = 1,
    pageSize: number = 10,
    searchText: string = ''
  ): Observable<ServiceResponse> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const params = new HttpParams()
      .set('sort', sort)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchText', searchText)
      .set('lang', lang);

    return this.http.get<ServiceResponse>(`${this.baseURL}${this.endPoint}/GetAllServices`, { params });
  }
  // 🔒 Requires authentication
  getServices(
    sort: string = '',
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
    lang: string = ''
  ): Observable<ServiceResponse> {
    lang = lang || this.translateService.getCurrentLang() || 'en';
    const params = new HttpParams()
      .set('sort', sort)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchText', searchText)
      .set('lang', lang);

    return this.http.get<ServiceResponse>(`${this.baseURL}${this.endPoint}/GetServices`, { params });
  }


getServiceDetails(id: number): Observable<ServiceDto> {
 const lang = this.translateService.getCurrentLang() || 'en';
  const url = `${this.baseURL}${this.endPoint}/DetailsServices?id=${id}&lang=${lang}`;
  return this.http.get<ServiceDto>(url);
}

  archiveService(id: number): Observable<any> {
    const url = `${this.baseURL}${this.endPoint}/ArchiveService/${id}`;
    return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
  }

  unArchiveService(id: number): Observable<any> {
    const url = `${this.baseURL}${this.endPoint}/UnArchiveService/${id}`;
    return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
  }

  createService(formData: FormData): Observable<ServiceDto> {
    const url = `${this.baseURL}${this.endPoint}/CreateService`;
    return this.http.post<ServiceDto>(url, formData, { headers: this.getAuthHeaders() });
  }

  updateService(formData: FormData): Observable<ServiceDto> {
    const url = `${this.baseURL}${this.endPoint}/UpdateService/${formData.get('id')}`;
    return this.http.put<ServiceDto>(url, formData, { headers: this.getAuthHeaders() });
  }

deleteService(serviceId: number): Observable<any> {
 const lang = this.translateService.getCurrentLang() || 'en';
  const url = `${this.baseURL}${this.endPoint}/DeleteService/${serviceId}?lang=${lang}`;
  return this.http.delete<any>(url, { headers: this.getAuthHeaders() });
}
getServiceBySlug(slug: string): Observable<ServiceDto> {
  const lang = this.translateService.getCurrentLang() || 'en';
  const url = `${this.baseURL}${this.endPoint}/GetServiceBySlug/${slug}?lang=${lang}`;
  return this.http.get<ServiceDto>(url);
}
}
