import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-business-research',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './business-research.component.html',
  styleUrls: ['./business-research.component.css',
    '../../../../../../../assets/css/pages/serviceDetails.css',
    '../../../../../../../assets/css/sections/contactSection.css',
    '../../../../../../../assets/css/pages/ourServcies.css'],
    encapsulation: ViewEncapsulation.None,
})
export class BusinessResearchComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
