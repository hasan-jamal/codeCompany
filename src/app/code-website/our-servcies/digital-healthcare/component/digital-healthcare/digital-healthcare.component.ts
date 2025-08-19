import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-digital-healthcare',
  imports: [
    RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
     ServicesS4Component,
    CommonModule],
  templateUrl: './digital-healthcare.component.html',
  styleUrls: ['./digital-healthcare.component.css',
                  '../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../assets/css/sections/ourServiceFlow.css']
})
export class DigitalHealthcareComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
   isHovered = false;
    serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "Hospital Information Systems (HIS)",  
      description: "A fully integrated platform that digitizes every aspect of hospital operations from triage and treatment to pharmacy, labs, HR, and supply chain. Modular, cloud-native and ready to scale.",
      link:"/ourServices/DigitalHealthcare/Hospital-InformationSystems",
      imageUrl: "assets/images/CodeServices/Digital%20Healthcare/HIS.jpg"
    },
     {
      id: 1,
      isHovered: false,
      name: "Revenue Cycle Management (RCM)",  
      description: "Accelerate reimbursements and reduce billing friction with a connected system for OP/IP billing, insurance workflows, and doctor payouts all fully automated, auditable and secure.",
      link:"/ourServices/DigitalHealthcare/Revenue-CycleManagement",
      imageUrl: "assets/images/CodeServices/Digital%20Healthcare/RCM-min.jpg"
    },
     {
      id: 1,
      isHovered: false,
      name: "Diagnosis-Related Groups (DRG)",  
      description: "Link clinical activity to revenue with automated DRG coding powered by real-time hospital data. Improve claims accuracy, reduce delays and simplify audits without adding manual work.",
      link:"/ourServices/DigitalHealthcare/Diagnosis-RelatedGroups",
      imageUrl: "assets/images/CodeServices/Digital%20Healthcare/DRG-min.jpg"
    },
     {
      id: 1,
      isHovered: false,
      name: "Telemedicine",  
      description: "Deliver care beyond hospital walls with secure, real-time virtual consultations, digital prescriptions, and online payments. One platform to extend access and reduce congestion.",
      link:"/ourServices/DigitalHealthcare/Tele-medicine",
      imageUrl: "assets/images/CodeServices/Digital%20Healthcare/Telemedicine-min.jpg"
    },

  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
