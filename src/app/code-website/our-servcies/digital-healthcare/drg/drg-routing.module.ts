import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrgComponent } from './component/drg/drg.component';

const routes: Routes = [
    {
      path: '',
      component:DrgComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrgRoutingModule { }
