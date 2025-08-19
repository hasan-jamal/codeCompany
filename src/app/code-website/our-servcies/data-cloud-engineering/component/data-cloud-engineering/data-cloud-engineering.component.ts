import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-data-cloud-engineering',
  imports: [RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
      ServicesS4Component,
    CommonModule],
  templateUrl: './data-cloud-engineering.component.html',
  styleUrls: ['./data-cloud-engineering.component.css',
                  '../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DataCloudEngineeringComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
    isHovered = false;
    serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "Data Engineering & Management",  
      description: "Turn raw data into reliable, analytics-ready assets with tools for governance, machine learning and real-time insights.",
      link:"/ourServices/Data&CloudEngineering/dataEngineering",
      imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/image-min.png"
    },
     {
      id: 1,
      isHovered: false,
      name: "Database Centralization",  
      description: "Unify your data in a secure, compliant environment improving access, quality and auditability.",
      link:"/ourServices/Data&CloudEngineering/dataEngineering",
      imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/database%20centralization.png"
    },
     {
      id: 1,
      isHovered: false,
      name: "Disaster Recovery",  
      description: "Safeguard your data and operations with automated backups, version control and fast recovery strategies.",
      link:"/ourServices/Data&CloudEngineering/dataEngineering",
      imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/Disaster%20Recovery-min.png"
    },
     {
      id: 1,
      isHovered: false,
      name: "IT Service Management (ITSM)",  
      description: "Automate support, standardize service delivery and gain real-time visibility across your IT environment aligned with international standards and ITIL best practices.",
      link:"/ourServices/Data&CloudEngineering/dataEngineering",
      imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/ITSM-min.png"
    },

  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
