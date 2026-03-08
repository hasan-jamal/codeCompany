import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisasterRecoverySolutionsComponent } from './component/disaster-recovery-solutions/disaster-recovery-solutions.component';

const routes: Routes = [
  {
    path: '',
    component:DisasterRecoverySolutionsComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisasterRecoverySolutionsRoutingModule { }
