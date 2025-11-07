import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Renderer2, ViewEncapsulation,Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { } from '@angular/common';
import { ModalService } from '../../../services/ModalService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar-mb',
    imports: [RouterLink, RouterLinkActive,CommonModule,TranslateModule],
    templateUrl: './navbar-mb.component.html',
    styleUrls: [
        './navbar-mb.component.css',
        '../../../../assets/css/header.css',
    ],
     encapsulation: ViewEncapsulation.None,
})
export class NavbarMbComponent{
     isSidenavOpen = false;
    servicesListOpen = false;
    aboutUsListOpen = false;    
    lang : string = 'en';
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: ModalService,
    private translate: TranslateService) {}
 toggleSidenav(open: boolean) {
    this.isSidenavOpen = open;
    if (isPlatformBrowser(this.platformId)) {
    const body = document.getElementById('body');
    if (body) {
      if (open) {
        this.renderer.setStyle(body, 'overflow', 'hidden');
      } else {
        this.renderer.setStyle(body, 'overflow', 'auto');
      }
    }
  }
  }
  closeSidenav(){
    this.isSidenavOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementById('body');
      this.renderer.setStyle(body, 'overflow', 'auto');
    }
  }
  toggleServicesList() {
    this.servicesListOpen = !this.servicesListOpen;
  }
  toggleAboutUsList() {
    this.aboutUsListOpen = !this.aboutUsListOpen;
  }
  openJoinUsModal() {
    this.isSidenavOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      const body = document.getElementById('body');
      this.renderer.setStyle(body, 'overflow', 'auto');
    }
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
}
