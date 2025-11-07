import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ai-solutions',
  imports: [RouterLink, 
    RouterLinkActive, 
    OurServiceFlowComponent,
     ServicesS4Component,
     CommonModule,
     TranslateModule
    ],
  templateUrl: './ai-solutions.component.html',
  styleUrls: ['./ai-solutions.component.css',
    '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css'],
     encapsulation: ViewEncapsulation.None,
})
export class AiSolutionsComponent {
  constructor(public router:Router,private modalService: ModalService){}
  
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  isHovered = false;
serviceCards = [
  {
    id: 1,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.AIDigitalTwin.name",
    descKey: "SERVICE_CARDS.AISolutions.AIDigitalTwin.description",
    link: "/ourServices/AISolutions/AIDigitalTwin",
    imageUrl: "assets/images/CodeServices/AIDigitalTwin-min.png"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.AIComputerVision.name",
    descKey: "SERVICE_CARDS.AISolutions.AIComputerVision.description",
    link: "/ourServices/AISolutions/AiComputerVision",
    imageUrl: "assets/images/CodeServices/AIComputerVisionmin.jpeg"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.AIVoicebotsChatbots.name",
    descKey: "SERVICE_CARDS.AISolutions.AIVoicebotsChatbots.description",
    link: "/ourServices/AISolutions/AiVoicebotChatbot",
    imageUrl: "assets/images/CodeServices/AIVoicebotsChatbots-min.jpeg"
  },
  {
    id: 4,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.AIInnovationHub.name",
    descKey: "SERVICE_CARDS.AISolutions.AIInnovationHub.description",
    link: "/ourServices/AISolutions/AiInnovationHub",
    imageUrl: "assets/images/CodeServices/AIInnovationHub-min.png"
  },
  {
    id: 5,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.IndoorWayfinding.name",
    descKey: "SERVICE_CARDS.AISolutions.IndoorWayfinding.description",
    link: "/ourServices/AISolutions/IndoorWayfinding",
    imageUrl: "assets/images/CodeServices/IndoorWayfinding-min.jpeg"
  },
  {
    id: 6,
    isHovered: false,
    nameKey: "SERVICE_CARDS.AISolutions.SmartCabins.name",
    descKey: "SERVICE_CARDS.AISolutions.SmartCabins.description",
    link: "/ourServices/AISolutions/smartCabins",
    imageUrl: "assets/images/CodeServices/SmartCabinets.png"
  }
];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
