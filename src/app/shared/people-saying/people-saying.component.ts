import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-people-saying',
  imports: [   CommonModule, SlickCarouselModule],
  templateUrl: './people-saying.component.html',
  styleUrl: './people-saying.component.css'
})
export class PeopleSayingComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef,@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('slickPeopleSaying', { static: false }) slickPeopleSaying!: SlickCarouselComponent;
  ngAfterViewInit() {

    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {

      const dots = document.querySelector('.sectionSix .slick-dots');
    
      if (!dots) return;
    
      let customNextArrow = dots.querySelector<HTMLButtonElement>('.custom-next-arrow');
  
      if (!customNextArrow) {
        customNextArrow = document.createElement('button');
        customNextArrow.classList.add('custom-next-arrow');
    
     dots.appendChild(customNextArrow);
    
      const arrowImg = document.createElement('img');
        arrowImg.src = '../../assets/images/arrow-peopleSaying.svg';
        customNextArrow.appendChild(arrowImg);
    
        customNextArrow.addEventListener('click', () => {
          this.slickPeopleSaying.slickNext();
        });
      }
    }
    });
  }

  peopleSaying = [
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    }
  ];

  sliderpeopleSaying = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          slidesToShow: 3.5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
}
