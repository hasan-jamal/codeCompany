import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-software-development',
  imports: [
      RouterLink,
      RouterLinkActive,
      OurServiceFlowComponent,
      ServicesS4Component,
      CommonModule,
      TranslateModule
    ],
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css',
                  '../../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/sections/ourServiceFlow.css']
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
    nameKey: "SOFTWARE_DEV.servicesS1.webMobile.name",
    descKey: "SOFTWARE_DEV.servicesS1.webMobile.description",
    link: "/ourServices/Software&Development/webMobileAppDevelopment",
    imageUrl: "assets/images/CodeServices/Software%20%26%20Development/Web%20and%20Mobile%20Development-min.jpeg"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "SOFTWARE_DEV.servicesS1.sharePoint.name",
    descKey: "SOFTWARE_DEV.servicesS1.sharePoint.description",
    link: "/ourServices/Software&Development/sharePointSolutions",
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
