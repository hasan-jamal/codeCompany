import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-smart-facility',
  templateUrl: './ai-smart-facility.component.html',
  styleUrls: [
                '../../../../../../../assets/css/pages/serviceDetails.css',
                '../../../../../../../assets/css/sections/contactSection.css',
                '../../../../../../../assets/css/pages/ourServcies.css',
                './ai-smart-facility.component.css'
              ],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class AiSmartFacilityComponent implements OnInit{
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
      titleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.TITLE",
      subTitleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.SUBTITLE",
      contentKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.CONTENT",
      listItems: [
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.0",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.1",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.2",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.3",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.4"
      ],
      extraSection: null,
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.TITLE",
      subTitleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.SUBTITLE",
      contentKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.CONTENT",
      listItems: [
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.ITEMS.0",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.ITEMS.1",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.ITEMS.2",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.ITEMS.3"
      ],
      extraSection: {
        titleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.EXTRA.TITLE",
        listItems: [
          "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.EXTRA.ITEMS.0",
          "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.EXTRA.ITEMS.1",
          "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.EXTRA.ITEMS.2",
          "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.2.EXTRA.ITEMS.3"
        ]
      },
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 3,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.TITLE",
      subTitleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.SUBTITLE",
      contentKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.CONTENT",
      listItems: [
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.ITEMS.0",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.ITEMS.1",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.ITEMS.2",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.ITEMS.3",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.3.ITEMS.4"
      ],
      extraSection: null,
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 4,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.TITLE",
      subTitleKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.SUBTITLE",
      contentKey: "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.CONTENT",
      listItems: [
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.0",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.1",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.2",
        "AI_FACILITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.3"
      ],
      extraSection: null,
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
}
