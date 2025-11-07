import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

// ✅ الصدور
export interface BreadcrumbData {
  title: string;
  subtitle?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  public _breadcrumb = new BehaviorSubject<BreadcrumbData>({ title: '', subtitle: '' });
  breadcrumb$ = this._breadcrumb.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const data = this.getBreadcrumb(this.route.root);
      this._breadcrumb.next(data);
    });
  }

  private getBreadcrumb(route: ActivatedRoute): BreadcrumbData {
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }

    const title = child.snapshot.data['title'] || '';
    const subtitle = child.snapshot.data['subtitle'] || '';
    return { title, subtitle };
  }
}
