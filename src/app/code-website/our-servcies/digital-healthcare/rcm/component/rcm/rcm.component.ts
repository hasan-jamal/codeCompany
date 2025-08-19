import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rcm',
  imports: [CommonModule,RouterLink],
  templateUrl: './rcm.component.html',
  styleUrls: ['./rcm.component.css',
      '../../../../../../../assets/css/pages/serviceDetails.css',
      '../../../../../../../assets/css/sections/contactSection.css',
      '../../../../../../../assets/css/pages/ourServcies.css'],
      encapsulation: ViewEncapsulation.None,
})
export class RcmComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
