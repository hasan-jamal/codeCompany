import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ea-services',
  templateUrl: './ea-services.component.html',
  styleUrls: ['../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './ea-services.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:false
})
export class EaServicesComponent implements OnInit{
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
      titleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_1.TITLE",
      subTitleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_1.SUBTITLE",
      listItems: [
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_1.ITEMS.0",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_1.ITEMS.1",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_1.ITEMS.2"
      ],
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_2.TITLE",
      subTitleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_2.SUBTITLE",
      listItems: [
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_2.ITEMS.0",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_2.ITEMS.1",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_2.ITEMS.2"
      ],
    },
    { 
      id: 3,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_3.TITLE",
      subTitleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_3.SUBTITLE",
      listItems: [
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_3.ITEMS.0",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_3.ITEMS.1",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_3.ITEMS.2"
      ],
    },
    { 
      id: 4,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_4.TITLE",
      subTitleKey: "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_4.SUBTITLE",
      listItems: [
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_4.ITEMS.0",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_4.ITEMS.1",
        "ENTERPRISE_ARCHITECTURE.TS_DATA.BOXES.BOX_4.ITEMS.2"
      ],
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
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_1.F1',
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_1.F2',
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_1.F3'
      ],
      image: 'assets/images/AIPackages-services/AI-Driven-Smart-City-Management/4.jpg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_2.F1',
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_2.F2',
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_2.F3',
        'ENTERPRISE_ARCHITECTURE.TS_DATA.SLIDES.SLIDE_2.F4'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];
}
