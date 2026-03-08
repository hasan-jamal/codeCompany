import { Component, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../../services/ModalService';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-his',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css',
  '../../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../../assets/css/pages/ourServcies.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HisComponent {
   his: any;
  constructor(private modalService: ModalService,private translate: TranslateService){
     this.his = this.translate.instant('his');
  }
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  
  getFeature(index: number) {
    return this.his.features[index];
  }

  getAi(index: number) {
    return this.his.aiList[index];
  }
}
