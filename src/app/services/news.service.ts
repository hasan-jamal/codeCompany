import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/News/News.Response';
import { NewsInterface } from '../models/News/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    baseApi: string = "https://localhost:7265/api/News";
    constructor(private _http:HttpClient) {}
    search:string ="";
    news: NewsResponse = {
      news: {
        data: [],
        sortable: {},
        pagination: {
          currentPage: 0,
          pageCount: 0,
          pageSize: 0,
          rowCount: 0
        }
      }
    };
 getAllNews(
    sort: string,
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
  ): Observable<NewsResponse> {
    const url = `${this.baseApi}/GetAllNews?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
    return this._http.get<NewsResponse>(url);
  }
   GetNews(
    sort: string,
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
  ): Observable<NewsResponse> {
    const url = `${this.baseApi}/GetNews?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
    return this._http.get<NewsResponse>(url,
    {
        headers: { Authorization: ''+ localStorage.getItem("token") } 
    });
  }
  getNewsDetails(newsId: number) {
      const url = `${this.baseApi}/DetailsNews?id=${newsId}`;
      return this._http.get<NewsInterface>(url);
  } 
  changeNotAvailable(newsId: number): Observable<any>{
    return this._http.patch<any>(`${this.baseApi}/ArchiveNews/${newsId}`, {}, {
      headers: { Authorization: localStorage.getItem("token") || '' }
    })
  }
  changeAvailable(newsId: number): Observable<any> {
    return this._http.patch<any>(`${this.baseApi}/UnArchiveNews/${newsId}`, {}, {
      headers: { Authorization: localStorage.getItem("token") || '' }
    })
  }
  updateNews(newsId: number, formData: FormData) {
    const url = `${this.baseApi}/UpdateNews/${newsId}`;
    return this._http.put<NewsInterface>(url, formData, {
      headers: { Authorization: '' + localStorage.getItem("token") }
    });
  }
  deleteNews(newsId: number) {
    const url = `${this.baseApi}/DeleteNews/${newsId}`;
    return this._http.delete<NewsInterface>(url, {
      headers: { Authorization: '' + localStorage.getItem("token") }
    });
  }
  createNews(formData: FormData) {
    const url = `${this.baseApi}/CreateNews`;
    return this._http.post<NewsInterface>(url, formData, {
      headers: { Authorization: '' + localStorage.getItem("token") }
    });
  }
}