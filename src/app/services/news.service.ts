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
  getNewsDetails(newsId: number) {
      const url = `${this.baseApi}/DetailsNews?id=${newsId}`;
      return this._http.get<NewsInterface>(url);
  }
}