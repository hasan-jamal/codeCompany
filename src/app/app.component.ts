import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { NavbarDesComponent } from "./shared/navbar-des/navbar-des.component";
import { NavbarMbComponent } from "./shared/navbar-mb/navbar-mb.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ModalJoinUsComponent } from './shared/modals/modal-join-us/modal-join-us.component';
import { TalkCodeComponent } from './shared/modals/talk-code/talk-code.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarDesComponent, 
    NavbarMbComponent, 
    FooterComponent,
    ModalJoinUsComponent,
    TalkCodeComponent
  ],
  templateUrl: './app.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit  {
  public pageTitle = 'Code Information';
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private title: Title,private meta: Meta,private router: Router) {
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
  this.title.setTitle('الرئيسية | موقعي');

  this.meta.addTags([
    { name: 'description', content: 'شركة كود المتقدمة لتقنية المعلومات هي شركة سعودية تأسست عام 2015، وتعمل في قطاع استشارات تقنية المعلومات وخدمات تكامل الأنظمة. يقع مقرها في الرياض – حي الملقا، وتُعرف بتقديم حلول تقنية متكاملة تدعم التحول الرقمي في المملكة، بما يتماشى مع رؤية السعودية 2030' },
    { name: 'author', content: 'Code Advanced for Information Technology' },
    { name: 'keywords', content: 'خدمات مدارة, خدمات مدارة لقواعد البيانات, خدمات البنية التحتية, خدمات التصميم والتكامل,  خدمات تصميم البوابات والشيربوينت, Managed Services, Consulting, Database Managed Services, Infrastructure Managed Services, Networking, DWH, Power BI, BI' },
    { name: 'robots', content: 'index, follow' },

    { property: 'og:title', content: 'مرحبا بكم في شركة كود المتقدمة لتقنية المعلومات' },
    { property: 'og:description', content: 'شركة كود المتقدمة لتقنية المعلومات هي شركة سعودية تأسست عام 2015، وتعمل في قطاع استشارات تقنية المعلومات وخدمات تكامل الأنظمة. يقع مقرها في الرياض – حي الملقا، وتُعرف بتقديم حلول تقنية متكاملة تدعم التحول الرقمي في المملكة، بما يتماشى مع رؤية السعودية 2030' },
    { property: 'og:image', content: 'https://code.sa/assets/images/ogLogo.jpg' },
    { property: 'og:url', content: 'https://code.sa/' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'مرحبا بكم في شركة كود المتقدمة لتقنية المعلومات' },
    { name: 'twitter:description', content: 'مرحبا بكم في شركة كود المتقدمة لتقنية المعلومات' },
    { name: 'twitter:image', content: 'https://code.sa/assets/images/ogLogo.jpg'},
   ]);

}

}
