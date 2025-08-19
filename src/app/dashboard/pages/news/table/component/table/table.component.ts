import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import { NewsResponse } from '../../../../../../models/News/News.Response';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: false
})
export class TableComponent implements OnInit {
     response: NewsResponse | undefined;
    selectedSort: string = '';
    searchText:string = '';
    currentPage: number = 1;
    pageSize: number = 5;
    newsDetails: NewsInterface; 
  constructor(private _newsService:NewsService){}
  ngOnInit(): void {
     this.getAllNews();
  }
  getAllNews(): void {
    this._newsService
      .getAllNews(
        this.selectedSort,
        this.currentPage, 
        this.pageSize,
        this.searchText,
      )
      .subscribe((data) => {
        this.response = data;
        console.log(data);
        
      });
    }
}
