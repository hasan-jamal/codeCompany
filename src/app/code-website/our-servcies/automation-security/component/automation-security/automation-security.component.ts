import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-automation-security',
  imports: [
    RouterLink, 
    RouterLinkActive,
     OurServiceFlowComponent, 
     ServicesS4Component,
     CommonModule,
     TranslateModule
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
    nameKey: "AUTOMATION.servicesS1.robProcess.name",
    descKey: "AUTOMATION.servicesS1.robProcess.description",
    link: "/ourServices/AutomationAndSecurity/roboticProcess",
    imageUrl: "assets/images/CodeServices/Automation%20%26%20Security/Robotic%20Process%20Automation-min.png"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "AUTOMATION.servicesS1.digitalSignature.name",
    descKey: "AUTOMATION.servicesS1.digitalSignature.description",
    link: "/ourServices/AutomationAndSecurity/digitalSignature",
    imageUrl: "assets/images/CodeServices/Automation%20%26%20Security/Signature-min.jpg"
  }
];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
