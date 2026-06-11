import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateInsightComponent } from './component/update-insight/update-insight.component';



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UpdateInsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
