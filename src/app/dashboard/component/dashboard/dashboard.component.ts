
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { NavComponent } from '../../shared/nav/nav.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    SidenavComponent,
    NavComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCss('assets/css/tailwind/nucleo-icons.css');
      this.loadCss('assets/css/tailwind/nucleo-svg.css');
          this.loadCss('assets/css/tailwind/perfect-scrollbar.css');
      this.loadCss('assets/css/tailwind/argon-dashboard-tailwind.min.css');

      this.loadScript('assets/js/plugins/chartjs.min.js');
      this.loadScript('assets/js/plugins/perfect-scrollbar.min.js');
      this.loadScript('assets/js/plugins/argon-dashboard-tailwind.min.js');
    }
  }

  loadCss(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  loadScript(src: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  }
}
