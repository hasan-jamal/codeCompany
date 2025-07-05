import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-engineering',
  imports: [CommonModule],
  templateUrl: './data-engineering.component.html',
  styleUrls: ['./data-engineering.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class DataEngineeringComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
