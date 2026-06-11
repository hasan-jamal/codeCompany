import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsightComponent } from './component/create-insight/create-insight.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:CreateInsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
