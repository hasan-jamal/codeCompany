import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-innovation-hub',
  imports: [CommonModule,RouterLink],
  templateUrl: './ai-innovation-hub.component.html',
  styleUrls: ['./ai-innovation-hub.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AiInnovationHubComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
