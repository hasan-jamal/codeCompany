import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './component/service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    component: ServicePageComponent,
  },
  {
    path: ':slug',
    component: ServicePageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
