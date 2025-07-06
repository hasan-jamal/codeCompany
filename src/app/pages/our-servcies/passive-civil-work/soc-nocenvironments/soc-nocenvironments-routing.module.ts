import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocNocenvironmentsComponent } from './component/soc-nocenvironments/soc-nocenvironments.component';

const routes: Routes = [
    {
      path: '',
      component:SocNocenvironmentsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocNocenvironmentsRoutingModule { }
