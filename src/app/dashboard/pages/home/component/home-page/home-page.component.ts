import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../../../../services/news.service';
import { CurrentUserService } from '../../../../../services/currentUser.service';
import { NewsResponse } from '../../../../../models/News/News.Response';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule, 
    NgxPaginationModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  response: NewsResponse | undefined;
  selectedSort: string = '';
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
    constructor(
      private _newsService: NewsService,
      private currentUserService: CurrentUserService
    ) {}

   ngOnInit(): void {
    this.getNews();
  }

getNews(): void {
  this._newsService.getNews(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
    .subscribe({
      next: (data) => {
        this.response = data;
        this.totalPages = Math.ceil(data.news.pagination.rowCount / this.pageSize);
      },
      error: (err) => {
        console.error('Error loading news:', err);
      },
    });
}


    curSlide = 0;

    get maxSlide() {
      return this.response!.news.data.length - 1;
    }

    nextSlide() {
      if (!this.response?.news?.data) return;
      this.curSlide = this.curSlide === this.maxSlide ? 0 : this.curSlide + 1;
    }

    prevSlide() {
      if (!this.response?.news?.data) return;
      this.curSlide = this.curSlide === 0 ? this.maxSlide : this.curSlide - 1;
    }

}
