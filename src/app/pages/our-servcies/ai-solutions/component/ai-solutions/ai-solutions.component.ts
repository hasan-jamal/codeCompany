import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from "../../../../../shared/sectionsPublic/services-s4/services-s4.component";

@Component({
  selector: 'app-ai-solutions',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
  templateUrl: './ai-solutions.component.html',
  styleUrls: ['./ai-solutions.component.css',
    '../../../../../../assets/css/pages/ourServcies.css',
    '../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../assets/css/sections/ourServiceFlow.css'],
})
export class AiSolutionsComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
