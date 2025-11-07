import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSubServicesComponent } from './component/table-sub-services/table-sub-services.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:TableSubServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
