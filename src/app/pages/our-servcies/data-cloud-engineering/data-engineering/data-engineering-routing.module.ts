import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataEngineeringComponent } from './component/data-engineering/data-engineering.component';

const routes: Routes = [
    {
      path: '',
      component:DataEngineeringComponent
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEngineeringRoutingModule { }
