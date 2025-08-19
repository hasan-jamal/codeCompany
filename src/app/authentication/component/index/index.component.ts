import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AboutUsRoutingModule } from "../../../code-website/about-us/about-us-routing.module";
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [AboutUsRoutingModule,RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
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
