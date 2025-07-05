import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-software-development',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
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
}
