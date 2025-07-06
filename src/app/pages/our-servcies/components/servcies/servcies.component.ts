import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../services/ModalService';
import { OurServiceFlowComponent } from '../../../../shared/sectionsPublic/our-service-flow/our-service-flow.component';
import { ServicesS4Component } from '../../../../shared/sectionsPublic/services-s4/services-s4.component';

@Component({
  selector: 'app-servcies',
  imports: [RouterLink, RouterLinkActive, OurServiceFlowComponent, ServicesS4Component],
  templateUrl: './servcies.component.html',
  styleUrls: ['./servcies.component.css',
                  '../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../assets/css/sections/contactSection.css',
                  '../../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServciesComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
