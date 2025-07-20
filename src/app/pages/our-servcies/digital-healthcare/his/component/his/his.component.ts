import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-his',
  imports: [CommonModule,RouterLink],
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HisComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
