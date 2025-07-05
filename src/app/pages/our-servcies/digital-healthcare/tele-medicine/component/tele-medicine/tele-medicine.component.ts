import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-tele-medicine',
  imports: [],
  templateUrl: './tele-medicine.component.html',
  styleUrls: ['./tele-medicine.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TeleMedicineComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
