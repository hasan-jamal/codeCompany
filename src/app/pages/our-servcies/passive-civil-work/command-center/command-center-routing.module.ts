import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandCenterComponent } from './component/command-center/command-center.component';

const routes: Routes = [
    {
      path: '',
      component:CommandCenterComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandCenterRoutingModule { }
