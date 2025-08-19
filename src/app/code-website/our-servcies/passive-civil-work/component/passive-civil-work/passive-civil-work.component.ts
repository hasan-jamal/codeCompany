import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-passive-civil-work',
  imports: [
     RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
     ServicesS4Component,
     CommonModule],
  templateUrl: './passive-civil-work.component.html',
  styleUrls: ['./passive-civil-work.component.css',
    '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css']
})
export class PassiveCivilWorkComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

    isHovered = false;
    serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "Command & Control Centers",  
      description: "Mission-critical environments where real-time data, alerts and communication tools come together enabling informed decisions, faster responses and unified oversight across sectors.",
      link:"/ourServices/Passive&CivilWork/commandCenter",
      imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/CommandCenters.jpg"
    },
     {
      id: 2,
      isHovered: false,
      name: "Media Centers",  
      description: "Secure, always-on environments designed for professional broadcast, public messaging, and internal briefings with smart switching, synchronized displays and UPS-backed continuity built in.",
      link:"/ourServices/Passive&CivilWork/mediaCenter",
      imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Media%20Center-min.jpg"
    },
        {
      id: 3,
      isHovered: false,
      name: "SOC & NOC Environments",  
      description: "Security and network operations hubs with 24/7 situational awareness, multi-layered threat detection and resilient infrastructure tailored for Saudi Arabia’s most vital systems and services.",
      link:"/ourServices/Passive&CivilWork/socNocenvironments",
      imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/NOC%20%26%20SOC-min.jpg"
    },
     {
      id: 4,
      isHovered: false,
      name: "Smart Meeting Rooms",  
      description: "High-performance collaboration spaces equipped with intelligent AV controls, privacy safeguards and hybrid conferencing capabilities ready to support modern governance and executive workflows.",
      link:"/ourServices/Passive&CivilWork/smartMeetingRooms",
      imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Smart%20Meeting%20Rooms.jpg"
    },
     {
      id: 5,
      isHovered: false,
      name: "Business Research Centers & Theatres",  
      description: "Presentation-ready environments optimized for strategic briefings, foresight discussions and research-driven insight combining immersive visuals, ergonomic layouts and real-time data access.",
      link:"/ourServices/Passive&CivilWork/businessResearch",
      imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Theatres%20%26%20BRC.png"
    },

  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
