import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-engineering',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './data-engineering.component.html',
  styleUrls: ['./data-engineering.component.css',
  '../../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../../assets/css/pages/ourServcies.css'],
    encapsulation: ViewEncapsulation.None,

})
export class DataEngineeringComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
