import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
     './navbar-des.component.css',
    '../../../assets/css/general.css',
    '../../../assets/css/header.css',
  ],
})
export class NavbarDesComponent {
    isCoverVisible = false;

  showCover() {
    this.isCoverVisible = true;
  }

  hideCover() {
    this.isCoverVisible = false;
  }
}