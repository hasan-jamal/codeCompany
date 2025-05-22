import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  },
  {
    path: 'ourPartners',
    component: OurPartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
