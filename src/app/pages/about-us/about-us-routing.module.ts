import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { OurClientsComponent } from './our-clients/our-clients.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  },
  {
    path: 'ourPartners',
    component: OurPartnersComponent
  },
  {
    path: 'ourClients',
    component: OurClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
