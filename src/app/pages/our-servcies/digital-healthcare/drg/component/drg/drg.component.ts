import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drg',
  imports: [CommonModule,RouterLink],
  templateUrl: './drg.component.html',
  styleUrls: ['./drg.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class DrgComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
