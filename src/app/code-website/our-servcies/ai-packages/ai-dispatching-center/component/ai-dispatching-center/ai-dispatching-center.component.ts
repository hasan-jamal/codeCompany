import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-dispatching-center',
  templateUrl: './ai-dispatching-center.component.html',
    styleUrls: [ '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './ai-dispatching-center.component.css'],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class AiDispatchingCenterComponent implements OnInit{
  constructor(private modalService: ModalService){}

  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  ngOnInit(): void {
  }
  activeTab: string = 'A';
  
  activeAccordion: number = 1;

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  toggleAccordion(id: number) {
    this.activeAccordion = this.activeAccordion === id ? 0 : id;
  }

}