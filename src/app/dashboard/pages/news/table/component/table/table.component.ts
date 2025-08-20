import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import { NewsResponse } from '../../../../../../models/News/News.Response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: false
})
export class TableComponent implements OnInit {
  response: NewsResponse | undefined;
  selectedSort: string = '';
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  newsDetails!: NewsInterface;
  newsId: number; 
  constructor(private _newsService: NewsService) {}

   ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this._newsService
      .GetNews(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
      .subscribe({
        next: (data) => {
          this.response = data;
          console.log('News loaded:', data);
        },
        error: (err) => {
          console.error('Error loading news:', err);
        },
      });
  }
//  changeActivation
changeNotActivation(newsId: number, story: any) {
  this._newsService.changeAvailable(newsId).subscribe({
    next: (res) => {
      Swal.fire({
        title: "Success!",
        text: "The item has been archived successfully.",
        icon: "success",
        draggable: true
      });
      story.archived = false; 
      this.getNews();
    },
    error: (err) => {
      console.log(err);
      Swal.fire({
        title: "Welcome!",
        text: 'You need to wait for the admins approval',
        icon: "error",
        draggable: true
      });
    }
  });
}

changeActivation(newsId: number,story: any) {
  this._newsService.changeNotAvailable(newsId).subscribe({
    next: (res) => {
      Swal.fire({
        title: "Item Restored!",
        text: "The item has been removed from archived items.",
        icon: "success",
        draggable: true
      });
      story.archived = false; 
      this.getNews();
    },
    error: (err) => console.error(err)
  });
}




}
