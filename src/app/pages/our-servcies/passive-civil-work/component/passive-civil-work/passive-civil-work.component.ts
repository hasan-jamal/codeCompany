import { Component } from '@angular/core';
import { ModalService } from '../../../../../services/ModalService';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-passive-civil-work',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
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
}
