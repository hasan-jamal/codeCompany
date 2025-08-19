import { Component, ViewEncapsulation } from '@angular/core';
import {RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css',
})
export class AppComponent  {

}
