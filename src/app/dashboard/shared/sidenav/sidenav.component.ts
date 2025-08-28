import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
    constructor(private _authService: AuthService, private router: Router) { }

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
