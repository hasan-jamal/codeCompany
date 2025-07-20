import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-computer-vision',
  imports: [CommonModule,RouterLink],
  templateUrl: './ai-computer-vision.component.html',
  styleUrls: ['./ai-computer-vision.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
      encapsulation: ViewEncapsulation.None,
})
export class AiComputerVisionComponent {
    constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
