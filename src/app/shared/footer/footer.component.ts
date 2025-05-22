import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './footer.component.html',
    styleUrls:[ 
      './footer.component.css',
      '../../../assets/css/general.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

}
