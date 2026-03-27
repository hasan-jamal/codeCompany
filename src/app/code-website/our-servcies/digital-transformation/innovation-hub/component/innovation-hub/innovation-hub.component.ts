import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-innovation-hub',
  templateUrl: './innovation-hub.component.html',
  styleUrls: ['../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './innovation-hub.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:false
})
export class InnovationHubComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
