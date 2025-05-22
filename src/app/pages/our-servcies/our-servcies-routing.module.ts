import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServciesComponent } from './components/servcies/servcies.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  {
    path:'',
    component:ServciesComponent
  },
  {
    path:'serviceDetails/:id',
    component:ServiceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServciesRoutingModule { }
