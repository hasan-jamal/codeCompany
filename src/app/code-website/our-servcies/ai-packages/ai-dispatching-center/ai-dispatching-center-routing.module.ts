import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiDispatchingCenterComponent } from './component/ai-dispatching-center/ai-dispatching-center.component';

const routes: Routes = [
    {
      path: '',
      component:AiDispatchingCenterComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiDispatchingCenterRoutingModule { }
