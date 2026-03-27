import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ModalService } from '../../../../../services/ModalService';

@Component({
  selector: 'app-ict-solutions',
  imports: [
        RouterLink, 
    OurServiceFlowComponent,
     ServicesS4Component,
     CommonModule,
     TranslateModule,
     SlickCarouselModule
  ],
  templateUrl: './ict-solutions.component.html',
  styleUrls: ['./ict-solutions.component.css',
      '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css'],
     encapsulation: ViewEncapsulation.None,
})
export class IctSolutionsComponent {
constructor(public router:Router,private modalService: ModalService){}
  
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  
  isHovered = false;
serviceCards = [
    {
      id: 1,
      isHovered: false,
      nameKey: "ICT_SOLUTIONS.TS_DATA.CARDS.1.TITLE",
      descKey: "ICT_SOLUTIONS.TS_DATA.CARDS.1.DESC",
      link: "/ourServices/Digital-Transformation/EaServices",
      imageUrl: "assets/images/Digital-Transformation-Services/s1.png"
    },
    {
      id: 2,
      isHovered: false,
      nameKey: "ICT_SOLUTIONS.TS_DATA.CARDS.2.TITLE",
      descKey: "ICT_SOLUTIONS.TS_DATA.CARDS.2.DESC",
      link: "/ourServices/Digital-Transformation/NdmoServices",
      imageUrl: "assets/images/Digital-Transformation-Services/s2.png"
    },
    {
      id: 3,
      isHovered: false,
      nameKey: "ICT_SOLUTIONS.TS_DATA.CARDS.3.TITLE",
      descKey: "ICT_SOLUTIONS.TS_DATA.CARDS.3.DESC",
      link: "/ourServices/Digital-Transformation/DgaConsultingServices",
      imageUrl: "assets/images/Digital-Transformation-Services/hero.jpeg"
    },
    {
      id: 4,
      isHovered: false,
      nameKey: "ICT_SOLUTIONS.TS_DATA.CARDS.4.TITLE",
      descKey: "ICT_SOLUTIONS.TS_DATA.CARDS.4.DESC",
      link: "/ourServices/Digital-Transformation/InnovationHub",
      imageUrl: "assets/images/Digital-Transformation-Services/s4.png"
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
        'ICT_SOLUTIONS.TS_DATA.SLIDES.1.F1',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.1.F2',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.1.F3',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.1.F4',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.1.F5'
      ],
      image: 'assets/images/AIPackages-services/2.jpeg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'ICT_SOLUTIONS.TS_DATA.SLIDES.2.F1',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.2.F2',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.2.F3',
        'ICT_SOLUTIONS.TS_DATA.SLIDES.2.F4'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];
}
