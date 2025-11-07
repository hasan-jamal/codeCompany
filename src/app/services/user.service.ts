import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentUserService } from './currentUser.service';
import { BaseService } from './repo/base.service';
import { Observable } from 'rxjs';
import { UserDto, UserInterface } from '../models/User/User.modal';
import { UserResponse } from '../models/User/UserResponce';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserInterface> {
  
  constructor(http: HttpClient, private currentUserService: CurrentUserService) {
    super(http, "user");
  }

    private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
        headers = headers.set('Authorization', token); 
    }
    return headers;
    }

   getAllUsers(sort: string, page: number = 1, pageSize: number = 10, searchText: string = ''): Observable<UserResponse> {
        const url = `${this.baseURL}${this.endPoint}/getUsers?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
        return this.http.get<UserResponse>(url);
    }
  changeNotAvailable(userId: number) {
    return this.http.patch(
      `${this.baseURL}${this.endPoint}/ArchiveUser/${userId}`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  changeAvailable(userId: number) {
    return this.http.patch(
      `${this.baseURL}${this.endPoint}/UnArchiveUser/${userId}`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }
    deleteUser(userId: number): Observable<any> {
      return this.http.delete<any>(`${this.baseURL}${this.endPoint}/delete/${userId}`, {
        headers: this.getAuthHeaders()
      });
    }
    getUserDetails(id: number): Observable<UserDto> {
      const url = `${this.baseURL}${this.endPoint}/GetUserDetails/${id}`;
      return this.http.get<UserDto>(url, { headers: this.getAuthHeaders() });
  }
    updateProfile(formData: FormData): Observable<UserDto> {
      const url = `${this.baseURL}${this.endPoint}/updateMyProfile/${formData.get('id')}`;
      return this.http.put<UserDto>(url, formData, { headers: this.getAuthHeaders() });
    }
}
