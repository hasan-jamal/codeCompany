import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItServiceManagementComponent } from './component/it-service-management/it-service-management.component';

const routes: Routes = [
  {
    path: '',
    component:ItServiceManagementComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItServiceManagementRoutingModule { }
