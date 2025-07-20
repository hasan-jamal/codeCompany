import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servcies',
  imports: [
    RouterLink,
    RouterLinkActive,
    OurServiceFlowComponent,
    CommonModule
],
  templateUrl: './servcies.component.html',
  styleUrls: ['./servcies.component.css',
                  '../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../assets/css/sections/contactSection.css',
                  '../../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServciesComponent {
  constructor(public router:Router,private modalService: ModalService){}
  isHovered = false;
      serviceCards = [
    {
      id: 1,
      isHovered: false,
      name: "AI Digital Twin ",
      description: "Build a live, intelligent digital replica of your facility to track performance, anticipate problems, and optimize operations  powered by seamless integration of BIM, GIS, and IoT for real-time insight and smarter decisions.",
      link:"/ourServices/AISolutions/AIDigitalTwin",
      imageUrl: "assets/images/CodeServices/AIDigitalTwin-min.png"
    },
        {
      id: 2,
      isHovered: false,
      name: "AI Computer Vision ",
      description: "Turn your cameras into smart observers. Use AI-powered video analytics to detect behavior, identify risks and automate security  including facial recognition, crowd analysis and perimeter alerts.",
      link:"/ourServices/AISolutions/AiComputerVision",
      imageUrl: "assets/images/CodeServices/AIComputerVisionmin.jpeg"
    },
        {
      id: 3,
      isHovered: false,
      name: "AI Voicebots & Chatbots ",
      description: "Automate support and engagement with Arabic-enabled AI bots that are available 24/7 across your digital channels delivering instant responses, seamless escalation and built-in analytics.",
      link:"/ourServices/AISolutions/AiVoicebotChatbot",
      imageUrl: "assets/images/CodeServices/AIVoicebotsChatbots-min.jpeg"
    },
    {
      id: 4,
      isHovered: false,
      name: "AI Innovation Hub",
      description: "Create immersive, AI-powered environments for training, planning and showcasing innovation  designed around your use case and optimized for local deployment.",
      link:"/ourServices/AISolutions/AiInnovationHub",
      imageUrl: "assets/images/CodeServices/AIInnovationHub-min.png"
    },
    {
      id: 5,
      isHovered: false,
      name: "Indoor Wayfinding ",
      description: "Help visitors navigate complex spaces with ease using LiDAR-precise 3D maps, voice guidance and augmented reality improving flow, accessibility and visitor satisfaction.",
      link:"/ourServices/AISolutions/IndoorWayfinding",
      imageUrl: "assets/images/CodeServices/IndoorWayfinding-min.jpeg"
    },
  {
    id: 6,
    isHovered: false,
    name: "Smart Cabins ",
    description: "Deploy secure, sensor-enabled cabins designed for exams, interviews, or sensitive tasks featuring biometric access, real-time monitoring and environmental control.",
    link:"/ourServices/AISolutions/smartCabins",
    imageUrl: "assets/images/CodeServices/SmartCabinets.png"
  }
  ];
  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
