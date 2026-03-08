import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-innovation-hub',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './innovation-hub.component.html',
  styleUrls: ['./innovation-hub.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class InnovationHubComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
