import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSubServiceComponent } from './component/update-sub-service/update-sub-service.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UpdateSubServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
