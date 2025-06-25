import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../../../services/ModalService';

@Component({
  selector: 'app-servcies',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './servcies.component.html',
  styleUrls: ['./servcies.component.css',
                  '../../../../../assets/css/pages/ourServcies.css',
                  '../../../../../assets/css/sections/contactSection.css',
                  '../../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServciesComponent {
  constructor(public router:Router,private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
