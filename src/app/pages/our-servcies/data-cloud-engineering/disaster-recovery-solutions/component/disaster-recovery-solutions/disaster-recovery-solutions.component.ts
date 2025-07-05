import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-disaster-recovery-solutions',
  imports: [],
  templateUrl: './disaster-recovery-solutions.component.html',
  styleUrls: ['./disaster-recovery-solutions.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class DisasterRecoverySolutionsComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
