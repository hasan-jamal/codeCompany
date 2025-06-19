import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servcies',
  imports: [],
  templateUrl: './servcies.component.html',
  styleUrls: ['./servcies.component.css',
                      '../../../../../assets/css/general.css',
                  '../../../../../assets/css/sections/contactSection.css',
                  '../../../../../assets/css/sections/ourServiceFlow.css']
})
export class ServciesComponent {
  constructor(public router:Router){}
}
