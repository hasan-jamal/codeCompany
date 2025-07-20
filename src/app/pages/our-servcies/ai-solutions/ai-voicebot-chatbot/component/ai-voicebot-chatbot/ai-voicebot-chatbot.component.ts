import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-voicebot-chatbot',
  imports: [CommonModule,RouterLink],
  templateUrl: './ai-voicebot-chatbot.component.html',
  styleUrls: ['./ai-voicebot-chatbot.component.css',
                  '../../../../../../../assets/css/pages/serviceDetails.css',
                  '../../../../../../../assets/css/sections/contactSection.css',
                  '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AiVoicebotChatbotComponent {
    constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
