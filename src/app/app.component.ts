import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   public pageTitle = 'Code Information';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (isPlatformBrowser(this.platformId)) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  this.translate.onLangChange.subscribe((event) => {
      const dir = event.lang === 'en' ? 'ltr' : 'rtl';
      this.document.documentElement.dir = dir;
      this.document.documentElement.lang = event.lang;
    });
    this.translate.use('en');
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
      }, 2000);
  }
  this.title.setTitle('CODE for Information Technology | روّاد التحول الرقمي وخدمات تقنية متكاملة');

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
