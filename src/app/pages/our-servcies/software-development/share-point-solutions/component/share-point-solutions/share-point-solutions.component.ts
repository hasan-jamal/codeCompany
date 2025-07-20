import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-share-point-solutions',
  imports: [CommonModule,RouterLink],
  templateUrl: './share-point-solutions.component.html',
  styleUrls: ['./share-point-solutions.component.css',
                    '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SharePointSolutionsComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
