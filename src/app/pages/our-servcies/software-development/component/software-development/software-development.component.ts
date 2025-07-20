import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-software-development',
  imports: [
      RouterLink,
      RouterLinkActive,
      OurServiceFlowComponent,
      ServicesS4Component,
      CommonModule
    ],
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css',
                  '../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../assets/css/sections/ourServiceFlow.css']
})
export class SoftwareDevelopmentComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
   isHovered = false;
    serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "Web and Mobile App Development",  
      description: "Modern digital experiences designed for performance and growth. We build scalable web platforms and high-capacity mobile apps that support everything from citizen engagement to enterprise automation. With integrated AI capabilities, our solutions personalize user experiences, enhance security and enable intelligent decision-making. Whether native or cross-platform, they deliver clean UX, robust backend integration and enterprise-grade performance across every screen.",
      link:"/ourServices/Passive&CivilWork/commandCenter",
      imageUrl: "assets/images/CodeServices/Software%20%26%20Development/Web%20and%20Mobile%20Development-min.jpeg"
    },
     {
      id: 2,
      isHovered: false,
      name: "SharePoint Solutions",  
      description: "Simplify collaboration with tailored SharePoint environments. From intranet portals and document libraries to automated workflows and secure access controls, we design solutions that match your operational needs. AI-powered features like smart search, content tagging and process automation increase productivity and visibility. Fully integrated with Microsoft 365, our SharePoint solutions boost governance, agility and internal communication.",
      link:"/ourServices/Software&Development/sharePointSolutions",
      imageUrl: "assets/images/CodeServices/Software%20%26%20Development/SharePointSolutions-min.jpg"
    }
  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
