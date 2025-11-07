import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-passive-civil-work',
  imports: [
     RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
     ServicesS4Component,
     TranslateModule,
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
    nameKey: "PASSIVE_CIVIL.servicesS1.commandCenter.name",
    descKey: "PASSIVE_CIVIL.servicesS1.commandCenter.description",
    link: "/ourServices/Passive&CivilWork/commandCenter",
    imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/CommandCenters.jpg"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "PASSIVE_CIVIL.servicesS1.mediaCenter.name",
    descKey: "PASSIVE_CIVIL.servicesS1.mediaCenter.description",
    link: "/ourServices/Passive&CivilWork/mediaCenter",
    imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Media%20Center-min.jpg"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "PASSIVE_CIVIL.servicesS1.socNoc.name",
    descKey: "PASSIVE_CIVIL.servicesS1.socNoc.description",
    link: "/ourServices/Passive&CivilWork/socNocenvironments",
    imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/NOC%20%26%20SOC-min.jpg"
  },
  {
    id: 4,
    isHovered: false,
    nameKey: "PASSIVE_CIVIL.servicesS1.smartMeeting.name",
    descKey: "PASSIVE_CIVIL.servicesS1.smartMeeting.description",
    link: "/ourServices/Passive&CivilWork/smartMeetingRooms",
    imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Smart%20Meeting%20Rooms.jpg"
  },
  {
    id: 5,
    isHovered: false,
    nameKey: "PASSIVE_CIVIL.servicesS1.businessResearch.name",
    descKey: "PASSIVE_CIVIL.servicesS1.businessResearch.description",
    link: "/ourServices/Passive&CivilWork/businessResearch",
    imageUrl: "assets/images/CodeServices/Passive%20%26%20Civil%20Work/Theatres%20%26%20BRC.png"
  }
];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
