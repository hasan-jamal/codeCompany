import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartHybridTheatersComponent } from './component/smart-hybrid-theaters/smart-hybrid-theaters.component';

const routes: Routes = [
    {
      path: '',
      component:SmartHybridTheatersComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartHybridTheatersRoutingModule { }
