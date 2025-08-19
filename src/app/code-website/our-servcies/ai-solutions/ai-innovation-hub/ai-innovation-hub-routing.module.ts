import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiInnovationHubComponent } from './component/ai-innovation-hub/ai-innovation-hub.component';

const routes: Routes = [
    {
      path: '',
      component:AiInnovationHubComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiInnovationHubRoutingModule { }
