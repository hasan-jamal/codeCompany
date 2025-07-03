import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndoorWayfindingComponent } from './component/indoor-wayfinding/indoor-wayfinding.component';

const routes: Routes = [
    {
      path: '',
      component:IndoorWayfindingComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndoorWayfindingRoutingModule { }
