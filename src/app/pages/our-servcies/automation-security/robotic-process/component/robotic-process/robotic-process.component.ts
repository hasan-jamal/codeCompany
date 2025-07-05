import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-robotic-process',
  imports: [CommonModule],
  templateUrl: './robotic-process.component.html',
  styleUrls: ['./robotic-process.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class RoboticProcessComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
