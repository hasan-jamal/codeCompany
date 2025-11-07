import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/ModalService';
import { CurrentUserService } from '../../../services/currentUser.service';
import { User } from '../../../models/User/User.modal';
import { Observable } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInterface } from '../../../models/Service/Service.modal';
import { ServiceService } from '../../../services/service.service';
import { ServiceResponse } from '../../../models/Service/Service.Response';

@Component({
  selector: 'app-navbar-des',
  imports: [RouterLink, RouterLinkActive, CommonModule,TranslateModule],
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
  lang : string = 'en';
  services: ServiceInterface[] = [];
    response: ServiceResponse | undefined;
    selectedSort: string = '';
    searchText: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;

    
  constructor(
    private modalService: ModalService, 
    private currentUserService: CurrentUserService,
    private http: HttpClient,
    private serviceService: ServiceService,
    private translate: TranslateService) {
      this.currentUser$ = this.currentUserService.currentUser$;
      const lang = localStorage.getItem('lang') || 'en';
      this.translate.use(lang);
  }
    ngOnInit(): void {
      this.currentUserService.currentUser$.subscribe(user => {
        this.userName = user?.username || null;
      });
         this.loadServices();
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
  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.lang = lang;

     if (lang === 'ar') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
  }

 loadServices(): void {
  this.serviceService.getServices(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
    .subscribe({
      next: (data: ServiceResponse) => {
        this.response = data;
        const rowCount = data.service?.pagination?.rowCount ?? 0;
        this.totalPages = Math.ceil(rowCount / this.pageSize);
      },
      error: (err) => {
        console.error('Error loading services:', err);
      },
    });

  }
}
