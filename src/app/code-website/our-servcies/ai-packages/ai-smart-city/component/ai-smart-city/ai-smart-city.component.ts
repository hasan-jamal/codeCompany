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
      titleKey: "AI_SMART_CITY.TS_DATA.BOXES.1.TITLE",
      subTitleKey: "AI_SMART_CITY.TS_DATA.BOXES.1.SUBTITLE",
      contentKey: "",
      listItems: [
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.0",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.1",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.2",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.3",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.4",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.5",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.6",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.7",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.8",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.9",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.10",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.11",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.12",
        "AI_SMART_CITY.TS_DATA.BOXES.1.ITEMS.13"
      ],
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_SMART_CITY.TS_DATA.BOXES.2.TITLE",
      subTitleKey: "AI_SMART_CITY.TS_DATA.BOXES.2.SUBTITLE", 
      contentKey: "",
      listItems: [
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.0",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.1",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.2",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.3",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.4",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.5",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.6",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.7",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.8",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.9",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.10",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.11",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.12",
        "AI_SMART_CITY.TS_DATA.BOXES.2.ITEMS.13"
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
        'AI_SMART_CITY.TS_DATA.SLIDES.1.F1',
        'AI_SMART_CITY.TS_DATA.SLIDES.1.F2',
        'AI_SMART_CITY.TS_DATA.SLIDES.1.F3'
      ],
      image: 'assets/images/AIPackages-services/AI-Driven-Smart-City-Management/4.jpg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'AI_SMART_CITY.TS_DATA.SLIDES.2.F1',
        'AI_SMART_CITY.TS_DATA.SLIDES.2.F2',
        'AI_SMART_CITY.TS_DATA.SLIDES.2.F3',
        'AI_SMART_CITY.TS_DATA.SLIDES.2.F4'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];
}