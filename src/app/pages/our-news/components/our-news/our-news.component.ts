import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-our-news',
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './our-news.component.html',
  styleUrls: ['./our-news.component.css',
          '../../../../../assets/css/sections/contactSection.css'],
          encapsulation: ViewEncapsulation.None
})
export class OurNewsComponent {
 @ViewChild('sliderStories',{static:false})  sliderStories!:SlickCarouselComponent
 stories=[
      {
          title:'Strategic Partnerships Conference',
          imgBackground:'assets/images/backStories.png'
      },
      {
        title:'Strategic Partnerships Conference',
        imgBackground:'assets/images/backStories.png'
    },
    {
      title:'Strategic Partnerships Conference',
      imgBackground:'assets/images/backStories.png'
    },
    {
      title:'Strategic Partnerships Conference',
      imgBackground:'assets/images/backStories.png'
    },
    {
      title:'Strategic Partnerships Conference',
      imgBackground:'assets/images/backStories.png'
    },
    {
      title:'Strategic Partnerships Conference',
      imgBackground:'assets/images/backStories.png'
    },
    {
      title:'Strategic Partnerships Conference',
      imgBackground:'assets/images/backStories.png'
    },
 ]
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
}
