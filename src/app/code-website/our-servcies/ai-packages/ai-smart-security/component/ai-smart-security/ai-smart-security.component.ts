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
    titleKey: "AI Computer Vision in Action",
    subTitleKey: "Real-Time Awareness of People and Spaces",
    contentKey: "The AI Vision layer continuously detects and analyzes:",
    listItems: [
      "Suspicious or abnormal behavior.",
      "Loitering and tailgating.",
      "Restricted zone breaches.",
      "Violence and weapon presence.",
      "Fire and smoke indicators.",
      "Crowd density and occupancy levels."
    ],
    footerContentKey: "This enables faster decisions, fewer false alarms, and earlier intervention.",
    pathBtn: ""
  },
  { 
    id: 2,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "AI Digital Twin – Driven Security",
    subTitleKey: "Subtitle for Box 2", 
    contentKey: "Content for Box 2...",
    listItems: [],
    footerContentKey: "",
    pathBtn: ""
  },
  { 
    id: 3,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "IoT Sensors in Action",
    subTitleKey: "Subtitle for Box 3",
    contentKey: "Content for Box 3...",
    listItems: [],
    footerContentKey: "",
    pathBtn: ""
  },
  { 
    id: 4,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "Robotics and Drones",
    subTitleKey: "Subtitle for Box 4",
    contentKey: "Content for Box 4...",
    listItems: [],
    footerContentKey: "",
    pathBtn: ""
  },
  { 
    id: 5,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "Immersive AR/VR Training",
    subTitleKey: "Subtitle for Box 5",
    contentKey: "Content for Box 5...",
    listItems: [],
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
