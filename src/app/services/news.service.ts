import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsInterface } from '../models/News/News';
import { NewsResponse } from '../models/News/News.Response';
import { CurrentUserService } from './currentUser.service';
import { BaseService } from './repo/base.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<NewsInterface> {

  constructor(
    http: HttpClient,
    private currentUserService: CurrentUserService
  ) {
    super(http, 'News'); // endpoint
  }

  /** Get Authorization headers if token exists */
  private getAuthHeaders(): HttpHeaders {
    const token = this.currentUserService.getToken();
    let headers = new HttpHeaders();
    if (token) {
      console.log('token = ' + token);
      headers = headers.set('Authorization', token);
      console.log('Headers sent:', headers.get('Authorization'));

    }
    return headers;
  }

  /** Helper method to build URL with params */
  private buildUrl(action: string, params?: string): string {
    return `${this.baseURL}${this.endPoint}/${action}${params ? '?' + params : ''}`;
  }

  /** ---------------------- READ ---------------------- **/

  // Public endpoint
  getAllNews(
    sort: string = '',
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
    lang: string = 'en'
  ): Observable<NewsResponse> {
    const params = `sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}&lang=${lang}`;
    return this.http.get<NewsResponse>(this.buildUrl('GetAllNews', params));
  }

  // Requires authentication
  getNews(
    sort: string = '',
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
    lang: string = 'en'
  ): Observable<NewsResponse> {
    const params = `sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}&lang=${lang}`;
    return this.http.get<NewsResponse>(
      this.buildUrl('GetNews', params),
      { headers: this.getAuthHeaders() }
    );
  }

  getNewsDetails(newsId: number): Observable<NewsInterface> {
    return this.http.get<NewsInterface>(
      this.buildUrl('DetailsNews', `id=${newsId}`),
      { headers: this.getAuthHeaders() }
    );
  }

  /** ---------------------- STATE CHANGE ---------------------- **/

  changeNotAvailable(newsId: number): Observable<any> {
    return this.http.patch(
      this.buildUrl(`ArchiveNews/${newsId}`),
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  changeAvailable(newsId: number): Observable<any> {
    return this.http.patch(
      this.buildUrl(`UnArchiveNews/${newsId}`),
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  /** ---------------------- CRUD ---------------------- **/

  createNews(formData: FormData): Observable<NewsInterface> {
    return this.http.post<NewsInterface>(
      this.buildUrl('CreateNews'),
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  updateNews(newsId: number, formData: FormData): Observable<NewsInterface> {
    return this.http.put<NewsInterface>(
      this.buildUrl(`UpdateNews/${newsId}`),
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  deleteNews(newsId: number): Observable<any> {
    return this.http.delete<any>(
      this.buildUrl(`DeleteNews/${newsId}`),
      { headers: this.getAuthHeaders() }
    );
  }
}
