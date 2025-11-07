import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CurrentUserService } from '../../../services/currentUser.service';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
    constructor(
    private _authService: AuthService, 
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }
userId: number | null = null;

ngOnInit(): void {
  this.currentUserService.currentUser$.subscribe(user => {
    if (user) {
      this.userId = user.id;
      console.log('User ID:', this.userId);
    } else {
      this.userId = null;
    }
  });
}
  logout(): void {
    console.log(this._authService.logout());
    this._authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
        console.log('Logout successful');
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
}
