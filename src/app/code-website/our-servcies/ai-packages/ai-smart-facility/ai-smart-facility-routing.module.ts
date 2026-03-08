import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiSmartFacilityComponent } from './component/ai-smart-facility/ai-smart-facility.component';

const routes: Routes = [
    {
      path: '',
      component:AiSmartFacilityComponent
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiSmartFacilityRoutingModule { }
