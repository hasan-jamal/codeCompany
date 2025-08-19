import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartCabinsComponent } from './component/smart-cabins/smart-cabins.component';

const routes: Routes = [
    {
      path: '',
      component:SmartCabinsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartCabinsRoutingModule { }
