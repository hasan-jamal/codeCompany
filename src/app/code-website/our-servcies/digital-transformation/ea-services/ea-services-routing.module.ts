import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaServicesComponent } from './component/ea-services/ea-services.component';

const routes: Routes = [
    {
      path: '',
      component:EaServicesComponent
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EaServicesRoutingModule { }
