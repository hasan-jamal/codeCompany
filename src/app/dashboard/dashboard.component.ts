import { Component, inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  router = inject(Router)
  goToServices():void{
    // this.router.navigateByUrl('/servcies')
        this.router.navigate(['servcies/1/4'])
  }
}
