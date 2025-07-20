import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from "../../../../../shared/sectionsPublic/services-s4/services-s4.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-automation-security',
  imports: [
    RouterLink, 
    RouterLinkActive,
     OurServiceFlowComponent, 
     ServicesS4Component,
     CommonModule
    ],
  templateUrl: './automation-security.component.html',
  styleUrls: ['./automation-security.component.css',
                  '../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../assets/css/sections/ourServiceFlow.css']
})
export class AutomationSecurityComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

   isHovered = false;
    serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "Robotic Process Automation",  
      description: "Automate routine tasks across departments using intelligent bots that never sleep, never forget, and never make mistakes. From data entry and report generation to cross-platform syncing, our RPA solutions help you reduce cost, improve speed and unlock your team’s full potential.",
      link:"/ourServices/AutomationAndSecurity/roboticProcess",
      imageUrl: "assets/images/CodeServices/Automation%20%26%20Security/Robotic%20Process%20Automation-min.png"
    },
    
        {
      id: 2,
      isHovered: false,
      name: "Digital Signature",
      description:"Sign contracts, approve documents, and complete transactions securely from anywhere. CODE’s digital signature solution, compliant with Saudi law, supports multiple verification methods and integrates seamlessly into your existing systems.",
      link:"/ourServices/AutomationAndSecurity/digitalSignature",
      imageUrl: "assets/images/CodeServices/Automation%20%26%20Security/Signature-min.jpg"
    },
  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
