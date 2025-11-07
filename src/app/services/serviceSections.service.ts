import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './repo/base.service';
import { CurrentUserService } from './currentUser.service';
import { ServiceSection } from '../models/Service/Service.modal';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSectionsService extends BaseService<ServiceSection> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService,
    private translateService: TranslateService
  ) {
    super(http, 'ServiceSections'); // endpoint
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    return headers;
  }

  // Get all sections by ServiceId
  getSectionsByServiceId(serviceId: number): Observable<ServiceSection[]> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const url = `${this.baseURL}${this.endPoint}/GetSectionsByService?serviceId=${serviceId}&lang=${lang}`;
    return this.http.get<ServiceSection[]>(url, { headers: this.getAuthHeaders() });
  }

  // Update ServiceSection
  updateServiceSection(formData: FormData): Observable<ServiceSection> {
    const url = `${this.baseURL}${this.endPoint}/UpdateServiceSection/${formData.get('id')}`;
    return this.http.put<ServiceSection>(url, formData, { headers: this.getAuthHeaders() });
  }
  getServiceSectionDetails(id: number): Observable<ServiceSection> {
    const lang = this.translateService.getCurrentLang() || 'en';
    const url = `${this.baseURL}${this.endPoint}/GetServiceSectionDetails/${id}`;
    return this.http.get<ServiceSection>(url, { headers: this.getAuthHeaders() });
}

}
