import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-it-service-management',
  imports: [CommonModule],
  templateUrl: './it-service-management.component.html',
  styleUrls: ['./it-service-management.component.css',
                '../../../../../../../assets/css/pages/serviceDetails.css',
                '../../../../../../../assets/css/sections/contactSection.css',
                '../../../../../../../assets/css/pages/ourServcies.css'],
                encapsulation: ViewEncapsulation.None,
})
export class ItServiceManagementComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
