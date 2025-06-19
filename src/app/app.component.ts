import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { NavbarDesComponent } from "./shared/navbar-des/navbar-des.component";
import { NavbarMbComponent } from "./shared/navbar-mb/navbar-mb.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ModalJoinUsComponent } from './shared/modal-join-us/modal-join-us.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarDesComponent, NavbarMbComponent, FooterComponent,ModalJoinUsComponent],
  templateUrl: './app.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit  {
  public pageTitle = 'Code Information';

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private titleService: Title,private meta: Meta,private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
  }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init();
      setTimeout(() => {
        const appRoot = document.querySelector('app-root') as HTMLElement;
        const splashScreen = document.querySelector('#splash-screen') as HTMLElement;
        splashScreen.style.opacity = '0'; 
        splashScreen.style.display = 'none';
        appRoot.style.opacity = '1';
        console.log('App Root is now visible:', appRoot.style.visibility);
      }, 5000);
  }

  this.titleService.setTitle(this.pageTitle);

    this.meta.updateTag({ property: 'og:title', content: 'Code Information' });
    this.meta.updateTag({ property: 'og:description', content: 'AI & Digital Transformation Built for Saudi Arabia.' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/images/favicon.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://code.sa/new/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
}
}
