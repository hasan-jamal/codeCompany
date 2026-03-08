import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnovationHubComponent } from './component/innovation-hub/innovation-hub.component';

const routes: Routes = [
    {
      path: '',
      component:InnovationHubComponent
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnovationHubRoutingModule { }
