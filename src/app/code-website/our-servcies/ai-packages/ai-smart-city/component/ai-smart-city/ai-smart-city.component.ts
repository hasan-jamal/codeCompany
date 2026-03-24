import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-smart-city',
  templateUrl: './ai-smart-city.component.html',
  styleUrls: [ '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './ai-smart-city.component.css'],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class AiSmartCityComponent implements OnInit{
  constructor(private modalService: ModalService){}
  activeCardId: number = 2;

  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  ngOnInit(): void {
     this.activateFirstBox();
  }

boxes = [
  { 
    id: 1,
    showPart2: true,
    isAnimating: false,
    isActive: true,
    titleKey: "Enterprise GIS Applications",
    subTitleKey: "Multi-Layer System Connectivity",
    contentKey: "",
    listItems: [
      "Traffic and transportation",
      "Estate management",
      "Education",
      "Street lights",
      "Land use",
      "Public safety",
      "Engineering",
      "Sewerage",
      "Property tax",
      "Health",
      "Town planning",
      "Water supply",
      "Solid waste",
      "Disaster management"
    ],
    footerContentKey: "",
    pathBtn: ""
  },
  { 
    id: 2,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "GIS Platform Integration",
    subTitleKey: "Multi-Layer System Connectivity", 
    contentKey: "",
    listItems: [
      "Smart governance",
      "E-governance",
      "Building management (BMS)",
      "Grievance redressal",
      "Citizen connect app",
      "Education and health care",
      "Solid waste management",
      "Auto vehicle location",
      "Integrated city operations",
      "Environment monitoring",
      "Smart poles",
      "Traffic management",
      "Parking management",
      "Smart tracking"
    ],
    footerContentKey: "",
    pathBtn: ""
  }
];
  activateFirstBox(): void {
    const firstBox = this.boxes[0];
    firstBox.isActive = true;
    firstBox.showPart2 = true;
    firstBox.isAnimating = true;

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 600);
  }

  onBoxClick(clickedBox: any): void {
    this.boxes.forEach(box => {
      box.showPart2 = false;
      box.isAnimating = false;
      box.isActive = false;
    });

    clickedBox.showPart2 = true;
    clickedBox.isActive = true;
    clickedBox.isAnimating = true;

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 600);
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
        'Parking revenue and occupancy.',
        'Waste management efficiency.',
        'Real-time system health across all city domains.'
      ],
      image: 'assets/images/AIPackages-services/AI-Driven-Smart-City-Management/4.jpg',
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