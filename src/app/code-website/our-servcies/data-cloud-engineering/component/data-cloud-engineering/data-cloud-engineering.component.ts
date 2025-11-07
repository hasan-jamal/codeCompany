import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-cloud-engineering',
  imports: [RouterLink,
     RouterLinkActive,
     OurServiceFlowComponent,
      ServicesS4Component,
      TranslateModule,
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
    nameKey: "DATA_CLOUDCARDS.servicesS1.dataEngineering.name",
    descKey: "DATA_CLOUDCARDS.servicesS1.dataEngineering.description",
    link: "/ourServices/Data&CloudEngineering/dataEngineering",
    imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/image-min.png"
  },
  {
    id: 2,
    isHovered: false,
    nameKey: "DATA_CLOUDCARDS.servicesS1.databaseCentralization.name",
    descKey: "DATA_CLOUDCARDS.servicesS1.databaseCentralization.description",
    link: "/ourServices/Data&CloudEngineering/dataEngineering",
    imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/database%20centralization.png"
  },
  {
    id: 3,
    isHovered: false,
    nameKey: "DATA_CLOUDCARDS.servicesS1.disasterRecovery.name",
    descKey: "DATA_CLOUDCARDS.servicesS1.disasterRecovery.description",
    link: "/ourServices/Data&CloudEngineering/dataEngineering",
    imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/Disaster%20Recovery-min.png"
  },
  {
    id: 4,
    isHovered: false,
    nameKey: "DATA_CLOUDCARDS.servicesS1.ITSM.name",
    descKey: "DATA_CLOUDCARDS.servicesS1.ITSM.description",
    link: "/ourServices/Data&CloudEngineering/dataEngineering",
    imageUrl: "assets/images/CodeServices/Data%20%26%20Cloud%20Engineering/ITSM-min.png"
  }
];

  onMouseEnter(card: any) {
    card.isHovered = true;
  }
  onMouseLeave(card: any) {
    card.isHovered = false;
  }
}
