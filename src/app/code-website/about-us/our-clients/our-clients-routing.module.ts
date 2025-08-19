import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurClientsComponent } from './component/our-clients/our-clients.component';

const routes: Routes = [
    {
      path: '',
      component:OurClientsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurClientsRoutingModule { }
