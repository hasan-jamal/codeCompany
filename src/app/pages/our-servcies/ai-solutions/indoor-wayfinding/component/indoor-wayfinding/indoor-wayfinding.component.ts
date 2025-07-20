import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indoor-wayfinding',
  imports: [CommonModule,RouterLink],
  templateUrl: './indoor-wayfinding.component.html',
  styleUrls: ['./indoor-wayfinding.component.css',
                    '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IndoorWayfindingComponent {
constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
