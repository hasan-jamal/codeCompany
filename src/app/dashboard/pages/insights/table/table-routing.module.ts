import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsTableComponent } from './component/table-insight/table-insight.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:InsightsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
