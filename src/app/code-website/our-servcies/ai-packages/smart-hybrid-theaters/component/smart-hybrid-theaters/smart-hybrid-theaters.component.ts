import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-smart-hybrid-theaters',
  templateUrl: './smart-hybrid-theaters.component.html',
    styleUrls: [ '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './smart-hybrid-theaters.component.css'],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class SmartHybridTheatersComponent implements OnInit{
constructor(private modalService: ModalService){}
  activeCardId: number = 2;
activeIndex: number = 0;
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


sliderConfig = {
    slidesToShow: 1,       
    slidesToScroll: 1,     
    dots: true,      
    arrows: true,      
    infinite: true,      
    autoplay: true,     
    autoplaySpeed: 3000,  
    rtl: false,       
    responsive: [    
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,   
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false    
        }
      }
    ]
  };

   featuresArray = [
  {
    id: 1,
    title: "Advanced LED Visual Systems.",
    content: "High-brightness LED walls replace projection and small displays, ensuring crisp, vibrant visuals even with house lights on. Side displays support speaker close-ups, branding, and sponsor content without clutter."
  },
  {
    id: 2,
    title: "Premium Audio and Accessibility",
    content: "Digitally optimized audio systems ensure even coverage and clear speech across the entire venue, supported by wireless microphones and assistive listening for inclusive experiences."
  },
  {
    id: 3,
    title: "Multi-Camera Video Production.",
    content: "Integrated PTZ camera systems provide professional-grade coverage for presenters, panels, and audience interaction, enabling live IMAG, recording, and low-latency streaming."
  },
  {
    id: 4,
    title: "Intelligent Lighting.",
    content: "Preset lighting scenes adapt instantly to presentations, panels, performances, or recording modes, ensuring presenters look natural on stage and on camera."
  },
  {
    id: 5,
    title: "Smart Control and Automation.",
    content: "Scene-based control systems allow presenters to connect, tap, and present, while operators retain full control behind the scenes for complex productions."
  }
];

setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
