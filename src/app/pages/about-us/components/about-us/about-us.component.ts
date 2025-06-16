import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about-us',
  imports: [    SlickCarouselModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css',
                  '../../../../../assets/css/general.css',
                  '../../../../../assets/css/sections/contactSection.css',
  ],
    encapsulation: ViewEncapsulation.None
  
})
export class AboutUsComponent {
  @ViewChild('slickModallogos',{ static:false}) slickModallogos!:SlickCarouselComponent;
  isHovered = false;
  // Second slider logos
 logos = [
  "assets/images/Partners logos/Austria.png",
  "assets/images/Partners logos/Germany (2).png",
  "assets/images/Partners logos/Germany.png",
  "assets/images/Partners logos/India (2).png",
  "assets/images/Partners logos/India (3).png",
  "assets/images/Partners logos/India (4).png",
  "assets/images/Partners logos/India (5).png",
  "assets/images/Partners logos/India.jpeg",
  "assets/images/Partners logos/India.png",
  "assets/images/Partners logos/Switzerland (2).png",
  "assets/images/Partners logos/Switzerland.png",
  "assets/images/Partners logos/Turkey.png",
  "assets/images/Partners logos/United Arab Emirates (UAE).png",
  "assets/images/Partners logos/United Arab Emirates..png",
  "assets/images/Partners logos/United Kingdom..png"
];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: false,
    dots: false,
      responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6.3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5.4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5.4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };
  nextSlidelogo() {
    this.slickModallogos.slickNext();
  }
  prevSlidelogo() {
    this.slickModallogos.slickPrev();
  }


  teamCards = [
    {
      id: 1,
      isHovered: false,
      name: "Ahmad Hassan",
      role: "Data Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      imageUrl: "assets/images/person.jpeg"
    },
    {
      id: 2,
      isHovered: false,
      name: "Sarah Johnson",
      role: "UX Designer",
      description: "Specializes in creating user-friendly interfaces with 5 years of experience in web and mobile applications...",
      imageUrl: "assets/images/person.jpeg"
    }
  ];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }

  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
