import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import { NewsResponse } from '../../../../../../models/News/News.Response';
import { ToastrService } from 'ngx-toastr';
import { CurrentUserService } from '../../../../../../services/currentUser.service';

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
  totalPages: number = 1;
  lang: string = 'en';
  newsDetails!: NewsInterface;
  newsId: number; 
  isDeleteModalOpen = false;
  newsToDelete!: NewsInterface;
  constructor(
    private _newsService: NewsService,
    private toastr: ToastrService,
    private currentUserService: CurrentUserService
  ) {}

   ngOnInit(): void {
    this.getNews();
  }

getNews(): void {
  console.log(this.currentUserService.getToken());

  this._newsService.getNews(this.selectedSort, this.currentPage, this.pageSize, this.searchText,this.lang)
    .subscribe({
      next: (data) => {
        console.log('News response:', data)
        this.response = data;
        this.totalPages = Math.ceil(data.news.pagination.rowCount / this.pageSize);
      },
      error: (err) => {
        console.error('Error:', err)
        console.error('Error loading news:', err);
      },
    });
}
  //  changeActivation
  changeNotActivation(newsId: number, story: any) {
    this._newsService.changeAvailable(newsId).subscribe({
      next: (res) => {
        this.toastr.success('The item has been removed from archived items', 'Item Archived!');
        story.archived = false; 
        this.getNews();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.err, 'Error!');
      }
    });
  }

  changeActivation(newsId: number,story: any) {
    this._newsService.changeNotAvailable(newsId).subscribe({
      next: (res) => {
        this.toastr.success('The item has been added from archived items', 'Item Archived!');
        story.archived = false; 
        this.getNews();
      },
      error: (err) =>   this.toastr.error(err.err, 'Error!')
    });
  }


openDeleteModal(story: NewsInterface) {
  this.newsToDelete = story;
  this.isDeleteModalOpen = true;
}

closeDeleteModal() {
  this.isDeleteModalOpen = false;
}
  confirmDelete() {
      if (!this.newsToDelete) return;
      console.log(this.newsToDelete);
      this._newsService.deleteNews(this.newsToDelete.id).subscribe({
    next: () => {
      this.toastr.success('The news item has been deleted successfully', 'Success');
      this.getNews();
      this.closeDeleteModal();
  },
error: (err) => {
  this.toastr.error('An error occurred while deleting the news item', 'Error');
  console.error(err);
}
  });
}
changePage(page: number) {
  if (page < 1 || page > this.totalPages) return;
  this.currentPage = page;
  this.getNews();
}

}
