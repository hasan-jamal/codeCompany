import { Component, Renderer2, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/ModalService';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
     './navbar-des.component.css',
    '../../../assets/css/general.css',
    '../../../assets/css/header.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarDesComponent {
    isCoverVisible = false;

  showCover() {
    this.isCoverVisible = true;
  }

  hideCover() {
    this.isCoverVisible = false;
  }
  constructor(private modalService: ModalService) {}

  openJoinUsModal() {
    this.modalService.open('modalJoinUs');
  }
}