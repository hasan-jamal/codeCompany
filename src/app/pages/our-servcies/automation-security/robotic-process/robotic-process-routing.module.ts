import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoboticProcessComponent } from './component/robotic-process/robotic-process.component';

const routes: Routes = [
    {
      path: '',
      component:RoboticProcessComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoboticProcessRoutingModule { }
