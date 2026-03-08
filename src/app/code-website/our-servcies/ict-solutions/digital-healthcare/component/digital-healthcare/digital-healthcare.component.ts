import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-digital-healthcare',
  imports: [
    RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
     ServicesS4Component,
     TranslateModule,
    CommonModule],
  templateUrl: './digital-healthcare.component.html',
  styleUrls: ['./digital-healthcare.component.css',
                  '../../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/sections/ourServiceFlow.css']
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
    nameKey: "DIGITAL_HEALTH.servicesS1.HIS.name",
    descKey: "DIGITAL_HEALTH.servicesS1.HIS.description",
    link: "/ourServices/DigitalHealthcare/Hospital-InformationSystems",
    imageUrl: "assets/images/CodeServices/Digital%20Healthcare/HIS.jpg"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "DIGITAL_HEALTH.servicesS1.RCM.name",
    descKey: "DIGITAL_HEALTH.servicesS1.RCM.description",
    link: "/ourServices/DigitalHealthcare/Revenue-CycleManagement",
    imageUrl: "assets/images/CodeServices/Digital%20Healthcare/RCM-min.jpg"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "DIGITAL_HEALTH.servicesS1.DRG.name",
    descKey: "DIGITAL_HEALTH.servicesS1.DRG.description",
    link: "/ourServices/DigitalHealthcare/Diagnosis-RelatedGroups",
    imageUrl: "assets/images/CodeServices/Digital%20Healthcare/DRG-min.jpg"
  },
  {
    id: 4,
    isHovered: false,
    nameKey: "DIGITAL_HEALTH.servicesS1.Telemedicine.name",
    descKey: "DIGITAL_HEALTH.servicesS1.Telemedicine.description",
    link: "/ourServices/DigitalHealthcare/Tele-medicine",
    imageUrl: "assets/images/CodeServices/Digital%20Healthcare/Telemedicine-min.jpg"
  }
];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
