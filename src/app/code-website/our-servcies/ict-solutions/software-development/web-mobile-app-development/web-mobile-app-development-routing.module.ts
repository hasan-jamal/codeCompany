import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebMobileAppDevelopmentComponent } from './component/web-mobile-app-development/web-mobile-app-development.component';

const routes: Routes = [
    {
      path: '',
      component:WebMobileAppDevelopmentComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebMobileAppDevelopmentRoutingModule { }
