import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive,CommonModule,TranslateModule],
  templateUrl: './footer.component.html',
    styleUrls:[ 
      './footer.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {

}
