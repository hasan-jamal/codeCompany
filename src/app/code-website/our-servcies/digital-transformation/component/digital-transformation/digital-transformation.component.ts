import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';

@Component({
  selector: 'app-digital-transformation',
 imports: [
    RouterLink, 
    RouterLinkActive, 
    OurServiceFlowComponent,
     ServicesS4Component,
     CommonModule,
     TranslateModule,
     SlickCarouselModule
    ],
  templateUrl: './digital-transformation.component.html',
  styleUrls: ['./digital-transformation.component.css',
      '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css'],
     encapsulation: ViewEncapsulation.None,
})
export class DigitalTransformationComponent {
 constructor(public router:Router,private modalService: ModalService){}
  
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  
  isHovered = false;
serviceCards = [
  {
    id: 1,
    isHovered: false,
    nameKey: "Enterprise Architecture ",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/Digital-Transformation/EaServices",
    imageUrl: "assets/images/Digital-Transformation-Services/s1.png"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "NDMO Services",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/Digital-Transformation/NdmoServices",
    imageUrl: "assets/images/Digital-Transformation-Services/s2.png"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "DGA Consulting Services",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
    link: "/ourServices/Digital-Transformation/DgaConsultingServices",
    imageUrl: "assets/images/Digital-Transformation-Services/hero.jpeg"
  },
    {
    id: 4,
    isHovered: false,
    nameKey: "AI Innovation Hub",
    descKey: "Turn raw data into reliable, analytics-ready assets, with tools for governance, machine learning, and real-time insights.",
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
