import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/ModalService';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
     './navbar-des.component.css',
    '../../../../assets/css/header.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarDesComponent implements OnInit {
  isCoverVisible = false;
  constructor(private modalService: ModalService,protected _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.name = localStorage.getItem('fullName');
  }
  showCover() {
    this.isCoverVisible = true;
  }
  hideCover() {
    this.isCoverVisible = false;
  }

  openJoinUsModal() {
    this.modalService.open('modalJoinUs');
  }
}