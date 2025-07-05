import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-digital-healthcare',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
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
}
