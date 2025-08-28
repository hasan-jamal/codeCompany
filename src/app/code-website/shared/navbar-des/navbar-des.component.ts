import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/ModalService';
import { CurrentUserService } from '../../../services/currentUser.service';
import { User } from '../../../models/User/User.modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
    './navbar-des.component.css',
    '../../../../assets/css/header.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarDesComponent implements OnInit {
  isCoverVisible = false;
  isAdmin: boolean | null = null;
  userName: string | null = null;
  currentUser$: Observable<User | null>;

  constructor(private modalService: ModalService, private currentUserService: CurrentUserService) {
        this.currentUser$ = this.currentUserService.currentUser$;
  }

    ngOnInit(): void {
      this.currentUserService.currentUser$.subscribe(user => {
        this.userName = user?.username || null;
      });
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
