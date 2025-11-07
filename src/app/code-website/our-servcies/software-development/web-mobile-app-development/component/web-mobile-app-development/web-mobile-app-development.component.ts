import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-web-mobile-app-development',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './web-mobile-app-development.component.html',
  styleUrls: ['./web-mobile-app-development.component.css',
                '../../../../../../../assets/css/pages/serviceDetails.css',
                '../../../../../../../assets/css/sections/contactSection.css',
                '../../../../../../../assets/css/pages/ourServcies.css'],
                     encapsulation: ViewEncapsulation.None,
})
export class WebMobileAppDevelopmentComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
