import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserService } from '../../../services/currentUser.service';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
isServiceProvider: boolean | null = null;
isAdmin: boolean | null = null;
userName: string | null = null;
  breadcrumb: any;
constructor(private currentUserService: CurrentUserService,private breadcrumbService: BreadcrumbService) {}

ngOnInit(): void {
  this.currentUserService.currentUser$.subscribe(user => {
    if (user) {
      this.userName = user.username;
      this.isAdmin = user.isAdmin || false;
    } else {
      this.userName = null;
      this.isAdmin = null;
    }
  });

    this.breadcrumbService.breadcrumb$.subscribe(data => {
      this.breadcrumb = data;
    });
}


}
