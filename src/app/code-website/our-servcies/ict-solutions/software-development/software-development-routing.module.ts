import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareDevelopmentComponent } from './component/software-development/software-development.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareDevelopmentComponent
  },
  {
    path: 'sharePointSolutions',
    loadChildren: () =>
      import('./share-point-solutions/share-point-solutions.module').then(m => m.SharePointSolutionsModule)
  },
  {
    path: 'webMobileAppDevelopment',
    loadChildren: () =>
      import('./web-mobile-app-development/web-mobile-app-development.module').then(m => m.WebMobileAppDevelopmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareDevelopmentRoutingModule { }
