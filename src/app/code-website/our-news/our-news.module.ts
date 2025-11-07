import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { OurNewsRoutingModule } from './our-news-routing.module';
import { OurNewsComponent } from './components/our-news/our-news.component';
import { OurNewsDetailsComponent } from './our-news-details/our-news-details.component';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    OurNewsComponent, 
    OurNewsDetailsComponent
  ],
  imports: [
    CommonModule,
    OurNewsRoutingModule,
    NgxPaginationModule,   
    SlickCarouselModule,
    RouterLink,
    TranslateModule
  ]
})
export class OurNewsModule { }
