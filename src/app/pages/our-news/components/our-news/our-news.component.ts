import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { Router, RouterLink } from '@angular/router';
import { ModalService } from '../../../../services/ModalService';
import { NewsService } from '../../../../services/news.service';
import { NewsResponse } from '../../../../models/News.Response';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsInterface } from '../../../../models/News';

@Component({
  selector: 'app-our-news',
  templateUrl: './our-news.component.html',
  styleUrls: ['./our-news.component.css',
          '../../../../../assets/css/sections/contactSection.css'],
          encapsulation: ViewEncapsulation.None,
          standalone:false
})
export class OurNewsComponent implements OnInit {
 @ViewChild('sliderStories',{static:false})  sliderStories!:SlickCarouselComponent;
   response: NewsResponse | undefined;
  selectedSort: string = '';
  searchText:string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  newsDetails: NewsInterface; 
 constructor(
  public router:Router,
  private modalService: ModalService,
  private _newsService: NewsService){}
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

  onDetailsButtonClick(newsId: number) {
        this.router.navigate(['/newsDetails', newsId]);
  }
 slideConfig = {
  slidesToShow: 4.5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  dots: false,
    responsive: [
    {
      breakpoint: 7000,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4.5,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4.5,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4.5,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4.1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4.3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 614,
      settings: {
        slidesToShow: 1.8,
      },
    },
  ],
};
  prevSlideStory(){
    this.sliderStories.slickPrev()
  }
  nextSlideStory(){
    this.sliderStories.slickNext()
  }
  scrollToSection() {
    const element = document.getElementById('targetSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
