import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubServiceComponent } from './component/create-sub-service/create-sub-service.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:CreateSubServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
