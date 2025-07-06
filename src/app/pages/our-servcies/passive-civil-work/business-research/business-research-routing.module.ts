import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessResearchComponent } from './component/business-research/business-research.component';

const routes: Routes = [
    {
      path: '',
      component:BusinessResearchComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessResearchRoutingModule { }
