import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-signature',
  imports: [CommonModule],
  templateUrl: './digital-signature.component.html',
  styleUrls: ['./digital-signature.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class DigitalSignatureComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
