import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsInterface } from '../models/News/News';
import { CurrentUserService } from './currentUser.service';
import { BaseService } from './repo/base.service';
import { NewsResponse } from '../models/News/News.Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<NewsInterface> {
  
  constructor(http: HttpClient, private currentUserService: CurrentUserService) {
    super(http, "News"); // endpoint
  }

 private getAuthHeaders(): HttpHeaders {
  const token = this.currentUserService.getToken();
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', token); 
  }
  return headers;
}

getAllNews(sort: string, page: number = 1, pageSize: number = 10, searchText: string = ''): Observable<NewsResponse> {
  const url = `${this.baseURL}${this.endPoint}/GetAllNews?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
  return this.http.get<NewsResponse>(url);
}
getNews(sort: string, page: number = 1, pageSize: number = 10, searchText: string = ''): Observable<NewsResponse> {
  const url = `${this.baseURL}${this.endPoint}/GetNews?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
  return this.http.get<NewsResponse>(url, { headers: this.getAuthHeaders() });
}
  getNewsDetails(newsId: number) {
    return this.http.get<NewsInterface>(
      `${this.baseURL}${this.endPoint}/DetailsNews?id=${newsId}`,
      { headers: this.getAuthHeaders() }
    );
  }

  changeNotAvailable(newsId: number) {
    return this.http.patch(
      `${this.baseURL}${this.endPoint}/ArchiveNews/${newsId}`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  changeAvailable(newsId: number) {
    return this.http.patch(
      `${this.baseURL}${this.endPoint}/UnArchiveNews/${newsId}`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  updateNews(newsId: number, formData: FormData) {
    return this.http.put<NewsInterface>(
      `${this.baseURL}${this.endPoint}/UpdateNews/${newsId}`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  createNews(formData: FormData) {
    return this.http.post<NewsInterface>(
      `${this.baseURL}${this.endPoint}/CreateNews`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

    deleteNews(newsId: number): Observable<any> {
      return this.http.delete<any>(`${this.baseURL}/DeleteNews/${newsId}`, {
        headers: this.getAuthHeaders()
      });
    }

}
