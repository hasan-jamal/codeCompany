import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/news.service';
import { NewsInterface } from '../../../models/News/News';
import { NewsResponse } from '../../../models/News/News.Response';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-our-news-details',
  templateUrl: './our-news-details.component.html',
  styleUrls: ['./our-news-details.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:false
})
export class OurNewsDetailsComponent implements OnInit {
  storyId: number;
  newsDetails: NewsInterface | null = null;
  response: NewsResponse | undefined;
  selectedSort: string = '';
  searchText:string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  safeDescription: SafeHtml | null = null;


  constructor(
    private route: ActivatedRoute,
    private _newsService: NewsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.storyId = +idParam;
        this.getDetails();
      }
    });

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

  getDetails(): void {
    this._newsService.getNewsDetails(this.storyId).subscribe({
      next: (data) => {
        this.newsDetails = data;

        if (this.newsDetails?.description) {
          this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.newsDetails.description);
        }
      },
      error: (err) => {
        console.error('Error loading news details:', err);
      }
    });
  }
}
