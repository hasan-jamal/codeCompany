import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-smart-security',
  templateUrl: './ai-smart-security.component.html',
  styleUrls: ['./ai-smart-security.component.css',
                '../../../../../../../assets/css/pages/serviceDetails.css',
                '../../../../../../../assets/css/sections/contactSection.css',
                '../../../../../../../assets/css/pages/ourServcies.css'],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class AiSmartSecurityComponent  implements OnInit{
  constructor(private modalService: ModalService){}
  activeCardId: number = 2;

  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  ngOnInit(): void {
     this.activateFirstBox();
  }

    // Start Section Three style
boxes = [
    { 
      id: 1,
      showPart2: true,
      isAnimating: false,
      isActive: true,
      titleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.TITLE",
      subTitleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.SUBTITLE",
      contentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.CONTENT",
      listItems: [
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.0",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.1",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.2",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.3",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.4",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.ITEMS.5"
      ],
      footerContentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.1.FOOTER",
      pathBtn: ""
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.TITLE",
      subTitleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.SUBTITLE", 
      contentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CONTENT",
      listItems: [],
      categorizedLists: [
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.1.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.1.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.1.ITEMS.1",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.1.ITEMS.2",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.1.ITEMS.3"
          ]
        },
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.2.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.2.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.2.ITEMS.1",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.2.ITEMS.2",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.2.CATEGORIES.2.ITEMS.3"
          ]
        }
      ],
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 3,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.TITLE",
      subTitleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.SUBTITLE",
      contentKey: "",
      listItems: [],
      categorizedLists: [
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.1.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.1.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.1.ITEMS.1"
          ]
        },
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.2.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.2.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.2.ITEMS.1"
          ]
        },
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.3.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.3.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.3.ITEMS.1",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.3.ITEMS.2"
          ]
        },
        {
          heading: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.4.HEADING",
          items: [
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.4.ITEMS.0",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.4.ITEMS.1",
            "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.CATEGORIES.4.ITEMS.2"
          ]
        }
      ],
      footerContentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.3.FOOTER",
      pathBtn: ""
    },
    { 
      id: 4,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.TITLE",
      subTitleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.SUBTITLE",
      contentKey: "",
      listItems: [
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.0",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.1",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.2",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.3",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.4",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.ITEMS.5"
      ],
      footerContentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.4.FOOTER",
      pathBtn: ""
    },
    { 
      id: 5,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.TITLE",
      subTitleKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.SUBTITLE",
      contentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.CONTENT",
      listItems: [
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.0",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.1",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.2",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.3",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.4",
        "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.ITEMS.5"
      ],
      footerContentKey: "AI_SECURITY_MANAGEMENT.TS_DATA.BOXES.5.FOOTER",
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
