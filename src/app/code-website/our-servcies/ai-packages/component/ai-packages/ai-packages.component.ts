import { Component, ViewEncapsulation } from '@angular/core';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { RouterLink, RouterLinkActive,Router } from '@angular/router';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../../../../services/ModalService';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-ai-packages',
  imports: [RouterLink, 
    RouterLinkActive, 
    OurServiceFlowComponent,
     ServicesS4Component,
     CommonModule,
     TranslateModule,
     SlickCarouselModule
    ],
  templateUrl: './ai-packages.component.html',
    styleUrls: ['./ai-packages.component.css',
    '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css'],
     encapsulation: ViewEncapsulation.None,
})
export class AiPackagesComponent {
  constructor(public router:Router,private modalService: ModalService){}
  
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  
  isHovered = false;
serviceCards = [
    {
      id: 1,
      isHovered: false,
      nameKey: "AI_PACKAGES.TS_DATA.CARDS.1.TITLE",
      descKey: "AI_PACKAGES.TS_DATA.CARDS.1.DESC",
      link: "/ourServices/AI-Packages/AiSmartCity",
      imageUrl: "assets/images/AIPackages-services/s1.jpeg"
    },
    {
      id: 2,
      isHovered: false,
      nameKey: "AI_PACKAGES.TS_DATA.CARDS.2.TITLE",
      descKey: "AI_PACKAGES.TS_DATA.CARDS.2.DESC",
      link: "/ourServices/AI-Packages/AiSmartFacility",
      imageUrl: "assets/images/AIPackages-services/s2.jpg"
    },
    {
      id: 3,
      isHovered: false,
      nameKey: "AI_PACKAGES.TS_DATA.CARDS.3.TITLE",
      descKey: "AI_PACKAGES.TS_DATA.CARDS.3.DESC",
      link: "/ourServices/AI-Packages/AiSmartSecurity",
      imageUrl: "assets/images/AIPackages-services/s3.jpeg"
    },
    {
      id: 4,
      isHovered: false,
      nameKey: "AI_PACKAGES.TS_DATA.CARDS.4.TITLE",
      descKey: "AI_PACKAGES.TS_DATA.CARDS.4.DESC",
      link: "/ourServices/AI-Packages/SmartHybridTheaters",
      imageUrl: "assets/images/AIPackages-services/s4.png"
    },
        {
      id: 5,
      isHovered: false,
      nameKey: "AI_PACKAGES.TS_DATA.CARDS.5.TITLE",
      descKey: "AI_PACKAGES.TS_DATA.CARDS.5.DESC",
      link: "/ourServices/AI-Packages/AiDispatchingCenter",
      imageUrl: "assets/images/AIPackages-services/s5.png"
    },
  ];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false, 
    "dots": false, 
    "autoplay": true,
    "autoplaySpeed": 3000,
    "infinite": true
  };

slidesData = [
    {
      features: [
        'AI_PACKAGES.TS_DATA.SLIDES.1.F1',
        'AI_PACKAGES.TS_DATA.SLIDES.1.F2',
        'AI_PACKAGES.TS_DATA.SLIDES.1.F3',
        'AI_PACKAGES.TS_DATA.SLIDES.1.F4',
        'AI_PACKAGES.TS_DATA.SLIDES.1.F5'
      ],
      image: 'assets/images/AIPackages-services/2.jpeg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'AI_PACKAGES.TS_DATA.SLIDES.2.F1',
        'AI_PACKAGES.TS_DATA.SLIDES.2.F2',
        'AI_PACKAGES.TS_DATA.SLIDES.2.F3',
        'AI_PACKAGES.TS_DATA.SLIDES.2.F4'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];
}
