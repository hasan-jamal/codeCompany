import { Component } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-database-consolidation',
  imports: [RouterLink,TranslateModule],
  templateUrl: './database-consolidation.component.html',
  styleUrls: ['./database-consolidation.component.css',
  '../../../../../../../assets/css/pages/serviceDetails.css',
  '../../../../../../../assets/css/sections/contactSection.css',
  '../../../../../../../assets/css/pages/ourServcies.css'],
})
export class DatabaseConsolidationComponent {
  constructor(private modalService: ModalService){}
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
