import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-s4',
  imports: [RouterLink,RouterLinkActive,CommonModule,TranslateModule],
  templateUrl: './services-s4.component.html',
  styleUrl: './services-s4.component.css'
})
export class ServicesS4Component {

}
