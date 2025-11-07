import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-smart-meeting-rooms',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './smart-meeting-rooms.component.html',
  styleUrls: ['./smart-meeting-rooms.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
encapsulation: ViewEncapsulation.None,
})
export class SmartMeetingRoomsComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
