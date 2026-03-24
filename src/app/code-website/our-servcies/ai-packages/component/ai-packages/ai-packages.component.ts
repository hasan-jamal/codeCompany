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
    nameKey: "AI Smart Security Management",
    descKey: "Turn raw data into reliable, analytics-ready assets with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/AISolutions/AIDigitalTwin",
    imageUrl: "assets/images/AIPackages-services/s1.jpeg"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "AI Smart Facility Management",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/AISolutions/AiComputerVision",
    imageUrl: "assets/images/AIPackages-services/s2.jpg"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "AI Smart City Management",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/AISolutions/AiVoicebotChatbot",
    imageUrl: "assets/images/AIPackages-services/s3.jpeg"
  },
  {
    id: 4,
    isHovered: false,
    nameKey: "Smart Hybrid Theaters",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/AISolutions/AiInnovationHub",
    imageUrl: "assets/images/AIPackages-services/s4.png"
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
        'Continuous visibility and monitoring',
        'Fast, coordinated response',
        'Reliable, real-time data',
        'Clear operational ownership',
        'Scalable deployment'
      ],
      image: 'assets/images/AIPackages-services/2.jpeg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'Advanced AI Analytics',
        'Automated reporting generation',
        'Customizable dashboards',
        '24/7 Support and maintenance'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];
}
