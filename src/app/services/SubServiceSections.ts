import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './repo/base.service';
import { CurrentUserService } from './currentUser.service';
import { SubServiceSection } from '../models/SubService/SubService.modal';

@Injectable({
  providedIn: 'root'
})
export class SubServiceSectionsService extends BaseService<SubServiceSection> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService
  ) {
    super(http, 'SubServiceSections'); // endpoint
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    return headers;
  }

  // Get all sections by SubServiceId
  getSectionsBySubServiceId(subServiceId: number): Observable<SubServiceSection[]> {
    const url = `${this.baseURL}${this.endPoint}/GetSectionsBySubService?subServiceId=${subServiceId}`;
    return this.http.get<SubServiceSection[]>(url, { headers: this.getAuthHeaders() });
  }

  // Update SubServiceSection
  updateSubServiceSection(formData: FormData): Observable<SubServiceSection> {
    const url = `${this.baseURL}${this.endPoint}/UpdateSubServiceSection/${formData.get('id')}`;
    return this.http.put<SubServiceSection>(url, formData, { headers: this.getAuthHeaders() });
  }
    getSubServiceSectionDetails(id: number): Observable<SubServiceSection> {
      const url = `${this.baseURL}${this.endPoint}/GetSubServiceSectionDetails/${id}`;
      return this.http.get<SubServiceSection>(url, { headers: this.getAuthHeaders() });
  }
  
}
