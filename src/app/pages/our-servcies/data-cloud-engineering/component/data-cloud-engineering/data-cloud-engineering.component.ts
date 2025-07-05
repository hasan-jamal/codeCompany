import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';

@Component({
  selector: 'app-data-cloud-engineering',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
  templateUrl: './data-cloud-engineering.component.html',
  styleUrls: ['./data-cloud-engineering.component.css',
                  '../../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../assets/css/sections/ourServiceFlow.css']
})
export class DataCloudEngineeringComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
