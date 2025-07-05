import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RcmComponent } from './component/rcm/rcm.component';

const routes: Routes = [
  {
    path: '',
    component:RcmComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RcmRoutingModule { }
